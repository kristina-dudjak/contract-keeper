import "./Contracts.css"
import DataService from "../../services/DataService"
import ContractsTable from "../../components/contractsTable/ContractsTable"
import DatePicker from "../../components/datePicker/DatePicker"
import Search from "../../components/search/Search"
import { Form, Link, useLoaderData } from "react-router-dom"
import Contract from "../../models/Contract"
import { useEffect } from "react"

export function loader({ request }: any) {
  const url = new URL(request.url)
  const q = url.searchParams.get("q") ?? undefined
  const dateString = url.searchParams.get("date") ?? undefined
  const date = dateString ? new Date(dateString) : undefined
  const contracts = DataService.searchContracts(q, date)
  return { contracts, q, dateString }
}

export default function Contracts() {
  const { contracts, q, dateString } = useLoaderData() as {
    contracts: Contract[]
    q: string
    dateString: string
  }

  useEffect(() => {
    const qEl = document.getElementById("q") as HTMLInputElement
    qEl.value = q ?? ""
    const dateEL = document.getElementById("date") as HTMLInputElement
    dateEL.value = dateString
  }, [q, dateString])

  return (
    <div className="contracts container">
      <h2 className="title">Contracts</h2>
      <div className="actions">
        <Form className="filters" role="search">
          <Search defaultValue={q} />
          <DatePicker name={"date"} defaultValue={dateString} />
        </Form>
        <Link className="new button" to="new">
          Add new contract
        </Link>
      </div>
      {contracts.length ? (
        <ContractsTable contracts={contracts} />
      ) : (
        <p className="empty">No contracts found.</p>
      )}
    </div>
  )
}

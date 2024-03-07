import "./Contracts.css"
import DataService from "../../services/DataService"
import ContractsTable from "../../components/contractsTable/ContractsTable"
import DatePicker from "../../components/datePicker/DatePicker"
import Search from "../../components/search/Search"
import { Form, Link, useLoaderData, useSubmit } from "react-router-dom"
import Contract from "../../models/Contract"
import { useEffect } from "react"

export function loader({ request }: any) {
  const url = new URL(request.url)
  const q = url.searchParams.get("q")
  const dateString = url.searchParams.get("date")
  const date = dateString ? new Date(dateString) : null
  const contracts = DataService.searchContracts(q, date)
  return { contracts, q, dateString }
}

export default function Contracts() {
  const { contracts, q, dateString } = useLoaderData() as {
    contracts: Contract[]
    q: string
    dateString: string
  }
  const submit = useSubmit()

  useEffect(() => {
    const qEl = document.getElementById("q") as HTMLInputElement
    qEl.value = q ?? ""
    const dateEL = document.getElementById("date") as HTMLInputElement
    dateEL.value = dateString
  }, [q, dateString])

  function handleSubmit(event: any) {
    const isFirstSearch = q == null
    submit(event.currentTarget.form, {
      replace: !isFirstSearch,
    })
  }

  return (
    <div className="contracts container">
      <h2 className="title">Contracts</h2>
      <div className="actions">
        <Form className="filters" role="search">
          <Search defaultValue={q} updateSearch={handleSubmit} />
          <DatePicker
            name={"date"}
            defaultValue={dateString}
            updateSearch={handleSubmit}
          />
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

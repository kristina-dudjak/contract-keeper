import "./Contracts.css"
import DataService from "../../services/DataService"
import { useEffect, useState } from "react"
import ContractsTable from "../../components/contractsTable/ContractsTable"
import DatePicker from "../../components/datePicker/DatePicker"
import Search from "../../components/search/Search"
import { Link } from "react-router-dom"

export default function Contracts() {
  const [filteredContracts, setFilteredContracts] = useState<Contract[]>([])

  useEffect(() => {
    setFilteredContracts(DataService.getContracts())
  }, [])

  function searchByName(query: string) {
    setFilteredContracts(DataService.searchContracts(query))
  }

  function searchByDate(date: Date | null) {
    setFilteredContracts(DataService.searchContractsByDate(date))
  }

  return (
    <div className="container">
      <h1 className="title">Contracts</h1>
      <Link to="new">New</Link>
      <Search onQueryChange={searchByName} />
      <DatePicker onDateChange={searchByDate} />
      <ContractsTable contracts={filteredContracts} />
    </div>
  )
}

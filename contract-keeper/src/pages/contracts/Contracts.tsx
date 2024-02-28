import "./Contracts.css"
import DataService from "../../services/DataService"
import { useEffect, useState } from "react"
import ContractsTable from "../../components/contractsTable/ContractsTable"
import DatePicker from "../../components/datePicker/DatePicker"
import Search from "../../components/search/Search"
import { Link } from "react-router-dom"
import Contract from "../../models/Contract"

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
    <div className="contracts container">
      <h2 className="title">Contracts</h2>
      <div className="actions">
        <div className="filters">
          <Search onQueryChange={searchByName} />
          <DatePicker onDateChange={searchByDate} />
        </div>
        <Link className="new button" to="new">
          Add new contract
        </Link>
      </div>
      {filteredContracts.length !== 0 && (
        <ContractsTable contracts={filteredContracts} />
      )}
      {filteredContracts.length == 0 && (
        <p className="empty">No contracts found.</p>
      )}
    </div>
  )
}

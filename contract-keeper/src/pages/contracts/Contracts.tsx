import { Link } from "react-router-dom"
import "./Contracts.css"
import openFile from "../../assets/openFile.svg"
import searchSvg from "../../assets/search.svg"
import DataService from "../../services/DataService"
import { useEffect, useState } from "react"

export default function Contracts() {
  const contracts = DataService.getContracts()
  const [searchText, setSearchText] = useState<string>("")
  const [filteredContracts, setFilteredContracts] =
    useState<Contract[]>(contracts)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      filterContracts()
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [searchText])

  const filterContracts = () => {
    const filtered = contracts.filter((contract) =>
      contract.name.toLowerCase().includes(searchText.toLowerCase())
    )
    setFilteredContracts(filtered)
  }

  return (
    <div className="container">
      <h1 className="title">Contracts</h1>
      <div className="search">
        <input
          className="searchInput"
          type="text"
          value={searchText}
          placeholder="Search contracts..."
          onChange={(event) => setSearchText(event.target.value)}
        />
        <img className="searchIcon" src={searchSvg} alt="Search icon" />
      </div>
      <table className="table">
        <thead>
          <tr className="row">
            <th>Client</th>
            <th>Contract</th>
            <th>Begin date</th>
            <th>End date</th>
            <th>Details</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredContracts.map((contract) => (
            <tr className="row" key={contract.id}>
              <td>{DataService.getClient(contract.clientId)?.name}</td>
              <td>{contract.name}</td>
              <td>{contract.beginDate}</td>
              <td>{contract.endDate}</td>
              <td>{contract.details}</td>
              <td>
                <Link to={`${contract.id}`}>
                  <img src={openFile} alt="Open file icon" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

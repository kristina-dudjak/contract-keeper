import { Link } from "react-router-dom"
import DataService from "../../services/DataService"
import openFile from "../../assets/openFile.svg"

interface ContractsTableProps {
  contracts: Contract[]
}

export default function ContractsTable({ contracts }: ContractsTableProps) {
  return (
    <table className="table">
      <thead>
        <tr className="row">
          <th>Client</th>
          <th>Contract</th>
          <th>Start date</th>
          <th>End date</th>
          <th>Details</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contracts.map((contract) => (
          <tr className="row" key={contract.id}>
            <td>{DataService.getClient(contract.clientId)?.name}</td>
            <td>{contract.name}</td>
            <td>{contract.startDate.toLocaleDateString()}</td>
            <td>{contract.endDate.toLocaleDateString()}</td>
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
  )
}

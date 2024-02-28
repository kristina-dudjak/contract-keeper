import { Link } from "react-router-dom"
import DataService from "../../services/DataService"
import openFile from "../../assets/openFile.svg"
import Contract from "../../models/Contract"
interface ContractsTableProps {
  contracts: Contract[]
}

export default function ContractsTable({ contracts }: ContractsTableProps) {
  return (
    <table className="table">
      <thead className="thead">
        <tr className="row">
          <th className="row">Client</th>
          <th className="head">Contract</th>
          <th className="head">Start date</th>
          <th className="head">End date</th>
          <th className="head">Details</th>
          <th className="head"></th>
        </tr>
      </thead>
      <tbody className="tbody">
        {contracts.map((contract) => (
          <tr className="row" key={contract.id}>
            <td className="data">
              {DataService.getClient(contract.clientId)?.name}
            </td>
            <td className="data">{contract.name}</td>
            <td className="data">{contract.startDate.toLocaleDateString()}</td>
            <td className="data">{contract.endDate.toLocaleDateString()}</td>
            <td className="data">{contract.details}</td>
            <td className="data">
              <Link className="link" to={contract.id}>
                <img className="icon" src={openFile} alt="Open file icon" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

import Client from "../../models/Client"
import openFile from "../../assets/openFile.svg"
import { Link } from "react-router-dom"
import "./ClientsTable.css"
import DataService from "../../services/DataService"

interface ClientsTable {
  clients: Client[]
}

export default function ClientsTable({ clients }: ClientsTable) {
  return (
    <table className="table">
      <thead className="thead">
        <tr className="row">
          <th className="head">Client name</th>
          <th className="head">Email</th>
          <th className="head">Phone</th>
          <th className="head">Contracts</th>
          <th className="head"></th>
        </tr>
      </thead>
      <tbody className="tbody">
        {clients.map((client) => (
          <tr className="row" key={client.id}>
            <td className="data">{client.name}</td>
            <td className="data">{client.email}</td>
            <td className="data">{client.phone}</td>
            <td className="data">
              {DataService.getClientContracts(client.id).length}
            </td>
            <td className="data">
              <Link className="link" to={client.id}>
                <img className="icon" src={openFile} alt="Open file icon" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

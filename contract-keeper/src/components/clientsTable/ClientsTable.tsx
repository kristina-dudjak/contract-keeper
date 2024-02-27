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
      <thead>
        <tr className="row">
          <th>Client name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Contracts</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr className="row" key={client.id}>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>{DataService.getClientContracts(client.id).length}</td>
            <td>
              <Link to={client.id}>
                <img src={openFile} alt="Open file icon" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

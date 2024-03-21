import "./Clients.css"
import { Link, useLoaderData } from "react-router-dom"
import DataService from "../../services/DataService"
import ClientsTable from "../../components/clientsTable/ClientsTable"
import Client from "../../models/Client"

export function loader() {
  const clients = DataService.getClients()
  return clients
}

export default function Clients() {
  const clients = useLoaderData() as Client[]

  return (
    <div className="clients container">
      <h2 className="title">Clients</h2>
      <Link className="new button" to="new">
        Add new client
      </Link>
      {clients.length ? (
        <div className="table-wrapper">
          <ClientsTable clients={clients} />
        </div>
      ) : (
        <p className="empty">No clients found.</p>
      )}
    </div>
  )
}

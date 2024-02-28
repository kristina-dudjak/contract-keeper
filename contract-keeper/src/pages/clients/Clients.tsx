import "./Clients.css"
import { Link } from "react-router-dom"
import DataService from "../../services/DataService"
import { useMemo } from "react"
import ClientsTable from "../../components/clientsTable/ClientsTable"

export default function Clients() {
  const clients = useMemo(() => DataService.getClients(), [])

  return (
    <div className="clients container">
      <h2 className="title">Clients</h2>
      <Link className="new button" to="new">
        Add new client
      </Link>
      {clients.length !== 0 && <ClientsTable clients={clients} />}
      {clients.length === 0 && <p className="empty">No clients found.</p>}
    </div>
  )
}

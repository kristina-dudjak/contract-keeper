import { Link, useNavigate, useParams } from "react-router-dom"
import DataService from "../../services/DataService"
import { useMemo } from "react"
import "./ClientView.css"

export default function ClientView() {
  const { clientId } = useParams()
  let navigate = useNavigate()
  const client = useMemo(() => {
    return clientId
      ? DataService.getClients().find((client) => client.id === clientId)
      : undefined
  }, [clientId])

  function deleteClient() {
    if (client) DataService.deleteClient(client.id)
    navigate("../")
  }

  return (
    <div className="client">
      <h2 className="title">
        <Link className="link" to="../">
          Clients /
        </Link>{" "}
        {client?.name}
      </h2>
      <div className="options">
        <Link className="edit" to="edit">
          Edit
        </Link>
        <button className="delete" onClick={deleteClient}>
          Delete
        </button>
      </div>
      {client && (
        <div className="info">
          <div className="field">
            <h3 className="label">ID:</h3>
            <p className="value">{client.id}</p>
          </div>
          <div className="field">
            <h3 className="label">Name:</h3>
            <p className="value">{client.name}</p>
          </div>
          <div className="field">
            <h3 className="label">Email:</h3>
            <p className="value">{client.email}</p>
          </div>
          <div className="field">
            <h3 className="label">Phone:</h3>
            <p className="value">{client.phone}</p>
          </div>
        </div>
      )}
      {!client && <p>No client</p>}
    </div>
  )
}

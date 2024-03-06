import { Link, useLoaderData, useNavigate } from "react-router-dom"
import DataService from "../../services/DataService"
import "./ClientView.css"
import Client from "../../models/Client"

export default function ClientView() {
  const client = useLoaderData() as Client
  let navigate = useNavigate()

  function deleteClient() {
    if (client) DataService.deleteClient(client.id)
    navigate("../")
  }

  return (
    <div className="client container">
      <h2 className="title">
        <Link className="link" to="../">
          Clients /
        </Link>{" "}
        {client?.name}
      </h2>
      {client && (
        <>
          <div className="options">
            <Link className="edit" to="edit">
              Edit
            </Link>
            <button className="delete" onClick={deleteClient}>
              Delete
            </button>
          </div>
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
        </>
      )}
      {!client && (
        <div className="empty">
          <p className="desc">There is no client with this id.</p>
          <Link className="link" to="../">
            Go back
          </Link>
        </div>
      )}
    </div>
  )
}

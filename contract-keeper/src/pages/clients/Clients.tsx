import "./Clients.css"
import openFile from "../../assets/openFile.svg"
import { Link } from "react-router-dom"
import DataService from "../../services/DataService"

export default function Clients() {
  const clients = DataService.getClients()
  return (
    <div className="container">
      <h1 className="title">Clients</h1>
      <div>
        <input type="search" placeholder="Search..." />
        <Link to="new">New</Link>
      </div>
      <table className="table">
        <thead>
          <tr className="row">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Number of contracts</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr className="row" key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>
                <Link to={`${client.name}`}>
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

import { clients } from "../../utils/Clients"
import "./Customers.css"
import openFile from "../../assets/openFile.svg"
import { Link } from "react-router-dom"

export default function Customers() {
  return (
    <div className="container">
      <h1 className="title">Customers</h1>
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
              <td>{client.contracts.length}</td>
              <Link to={`${client.name}`}>
                <img src={openFile} alt="Open file icon" />
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

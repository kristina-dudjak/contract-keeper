import { clients } from "../../utils/Clients"
import "./Contracts.css"

export default function Contracts() {
  return (
    <div className="container">
      <h1 className="title">Contracts</h1>
      <table className="table">
        <thead>
          <tr className="row">
            <th>Customer</th>
            <th>Contract</th>
            <th>Begin date</th>
            <th>End date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) =>
            client.contracts.map((contract) => (
              <tr className="row" key={client.id}>
                <td>{client.name}</td>
                <td>{contract.name}</td>
                <td>{contract.beginDate}</td>
                <td>{contract.endDate}</td>
                <td>{contract.details}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

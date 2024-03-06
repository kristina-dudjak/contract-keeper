import { Link, useLoaderData, useNavigate } from "react-router-dom"
import "./ContractView.css"
import DataService from "../../services/DataService"
import Contract from "../../models/Contract"

export async function loader({ params }: any) {
  return DataService.getContract(params.contractId)
}

export default function ContractView() {
  const contract = useLoaderData() as Contract
  let navigate = useNavigate()

  function deleteContract() {
    if (contract) DataService.deleteContract(contract.id)
    navigate("../")
  }

  return (
    <div className="contract container">
      <h2 className="title">
        <Link className="link" to="../">
          Contracts /
        </Link>{" "}
        {contract.id}
      </h2>

      {contract && (
        <>
          <div className="options">
            <Link className="edit" to="edit">
              Edit
            </Link>
            <button className="delete" onClick={deleteContract}>
              Delete
            </button>
          </div>
          <div className="info">
            <div className="field">
              <h3 className="label">ID:</h3>
              <p className="value">{contract.id}</p>
            </div>
            <div className="field">
              <h3 className="label">Name:</h3>
              <p className="value">{contract.name}</p>
            </div>
            <div className="field">
              <h3 className="label">Client ID:</h3>
              <p className="value">{contract.clientId}</p>
            </div>
            <div className="field">
              <h3 className="label">Start date:</h3>
              <p className="value">{contract.startDate.toLocaleDateString()}</p>
            </div>
            <div className="field">
              <h3 className="label">End date:</h3>
              <p className="value">{contract.endDate.toLocaleDateString()}</p>
            </div>
            <h3 className="label">Details:</h3>
            <pre className="value details">{contract.details}</pre>
          </div>
        </>
      )}
      {!contract && (
        <div className="empty">
          <p className="desc">There is no contract with this id.</p>
          <Link className="link" to="../">
            Go back
          </Link>
        </div>
      )}
    </div>
  )
}

import { Link, useNavigate, useParams } from "react-router-dom"
import "./ContractView.css"
import DataService from "../../services/DataService"
import { useMemo } from "react"

export default function ContractView() {
  const { contractId } = useParams()
  let navigate = useNavigate()
  const contract = useMemo(() => {
    return contractId ? DataService.getContract(contractId) : undefined
  }, [contractId])

  function deleteContract() {
    if (contractId) DataService.deleteContract(contractId)
    navigate("../")
  }

  return (
    <div className="contract">
      <h2 className="title">
        <Link className="link" to="../">
          Contracts /
        </Link>{" "}
        {contractId}
      </h2>

      <div className="options">
        <Link className="edit" to="edit">
          Edit
        </Link>
        <button className="delete" onClick={deleteContract}>
          Delete
        </button>
      </div>
      {contract && (
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
      )}
      {!contract && <p>No contract</p>}
    </div>
  )
}

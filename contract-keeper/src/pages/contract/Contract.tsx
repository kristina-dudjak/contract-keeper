import { useParams } from "react-router-dom"
import "./Contract.css"
import DataService from "../../services/DataService"

export default function Contract() {
  const { contractId } = useParams()
  const parsedContractId = contractId ? parseInt(contractId) : undefined
  const contract: Contract | undefined = DataService.getContracts().find(
    (contract) => parsedContractId === contract.id
  )

  return (
    <div className="contract">
      <h1 className="title">Contracts / {contractId}</h1>
      <div className="c">
        <h3>ID</h3>
        <p>{contract?.id}</p>
        <h3>Name</h3>
        <p>{contract?.name}</p>
        <h3>Begin date</h3>
        <p>{contract?.beginDate}</p>
        <h3>End date</h3>
        <p>{contract?.endDate}</p>
        <h3>Details</h3>
        <p>{contract?.details}</p>
      </div>
    </div>
  )
}

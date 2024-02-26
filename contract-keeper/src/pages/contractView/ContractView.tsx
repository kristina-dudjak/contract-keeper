import { useParams } from "react-router-dom"
import "./ContractView.css"
import Contract from "../../models/Contract"
import DataService from "../../services/DataService"

export default function ContractView() {
  const { contractId } = useParams()
  const contract: Contract | undefined = DataService.getContracts().find(
    (contract) => contractId === contract.id
  )

  return (
    <div className="contract">
      <h1 className="title">Contracts / {contractId}</h1>
      <div className="c">
        <h3>ID</h3>
        <p>{contract?.id}</p>
        <h3>Name</h3>
        <p>{contract?.name}</p>
        <h3>Start date</h3>
        <p>{contract?.startDate.toLocaleDateString()}</p>
        <h3>End date</h3>
        <p>{contract?.endDate.toLocaleDateString()}</p>
        <h3>Details</h3>
        <p>{contract?.details}</p>
      </div>
    </div>
  )
}

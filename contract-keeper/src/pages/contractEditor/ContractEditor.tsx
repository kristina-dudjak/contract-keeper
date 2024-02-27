import { Link, useParams } from "react-router-dom"
import ContractForm from "../../components/contractForm/ContractForm"
import "./ContractEditor.css"

export default function ContractEditor() {
  const { contractId } = useParams()
  return (
    <div className="contractEditor">
      <h2 className="title">
        <Link className="link" to="/contracts">
          Contracts /
        </Link>{" "}
        {contractId ? "Edit" : "New"}
      </h2>
      <ContractForm />
    </div>
  )
}

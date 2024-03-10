import { Link, redirect, useLoaderData } from "react-router-dom"
import ContractForm from "../../components/contractForm/ContractForm"
import "./ContractEditor.css"
import Contract from "../../models/Contract"
import DataService from "../../services/DataService"

export async function action({ request, params }: any) {
  const formData = await request.formData()
  const updates: Record<string, string> = Object.fromEntries(formData)
  const { name, clientName, startDate, endDate, details } = updates
  const errors: any = {}
  const clients = DataService.getClients()
  const clientId = DataService.getClientId(clientName)

  if (!name) {
    errors.name = "Contract name is required."
  }
  if (!clientName || !clients.some((client) => client.id === clientId)) {
    errors.clientName = "Choose a valid client."
  }
  if (!startDate) {
    errors.startDate = "Start date is required."
  }
  if (!endDate) {
    errors.endDate = "End date is required."
  }
  if (!details) {
    errors.details = "Details field is required."
  }
  if (Object.keys(errors).length) {
    return errors
  }

  DataService.saveContract(
    name,
    DataService.getClientId(clientName)!,
    new Date(startDate),
    new Date(endDate),
    details,
    params.contractId
  )
  return redirect("../")
}

export default function ContractEditor() {
  const contract = useLoaderData() as Contract
  return (
    <div className="contractEditor container">
      <h2 className="title">
        <Link className="link" to="/contracts">
          Contracts /
        </Link>{" "}
        {contract ? "Edit" : "New"}
      </h2>
      <ContractForm contract={contract} />
    </div>
  )
}

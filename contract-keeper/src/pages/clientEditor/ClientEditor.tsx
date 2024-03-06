import { Link, redirect, useLoaderData } from "react-router-dom"
import ClientForm from "../../components/clientForm/ClientForm"
import DataService from "../../services/DataService"
import Client from "../../models/Client"

export async function loader({ params }: any) {
  return DataService.getClient(params.clientId)
}

export async function action({ request, params }: any) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  const { fullName, email, phone } = updates
  DataService.saveClient(fullName, email, phone, params.clientId)
  return redirect("../")
}

export default function ClientEditor() {
  const client = useLoaderData() as Client
  return (
    <div className="clientEditor container">
      <h2 className="title">
        <Link className="link" to="/clients">
          Clients /
        </Link>{" "}
        {client ? "Edit" : "New"}
      </h2>
      <ClientForm client={client} />
    </div>
  )
}

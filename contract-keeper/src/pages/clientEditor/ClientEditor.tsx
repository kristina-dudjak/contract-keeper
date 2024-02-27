import { Link, useParams } from "react-router-dom"
import ClientForm from "../../components/clientForm/ClientForm"
import "./ClientEditor.css"

export default function ClientEditor() {
  const { clientId } = useParams()
  return (
    <div className="clientEditor">
      <h2 className="title">
        <Link className="link" to="/clients">
          Clients /
        </Link>{" "}
        {clientId ? "Edit" : "New"}
      </h2>
      <ClientForm />
    </div>
  )
}

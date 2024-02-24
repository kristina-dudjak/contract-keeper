import { useParams } from "react-router-dom"

export default function Client() {
  const { clientName } = useParams()
  return (
    <div className="container">
      <h1 className="title">Clients / {clientName}</h1>
    </div>
  )
}

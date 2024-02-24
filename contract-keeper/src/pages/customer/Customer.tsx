import { useParams } from "react-router-dom"

export default function Customer() {
  const { customerName } = useParams()
  return (
    <div className="container">
      <h1 className="title">Customers / {customerName}</h1>
    </div>
  )
}

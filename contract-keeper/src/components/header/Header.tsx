import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <h1 className="title">Contract keeper</h1>
      <nav className="nav">
        <ul className="list">
          <li className="item">
            <Link className="link" to="contracts">
              Contracts
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="clients">
              Clients
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

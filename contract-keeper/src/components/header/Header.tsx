import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <h2>Contract keeper</h2>
      <nav className="nav">
        <ul className="list">
          <li>
            <Link to="clients">Clients</Link>
          </li>
          <li>
            <Link to="contracts">Contracts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

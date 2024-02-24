import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <h2>Contract keeper</h2>
      <nav className="nav">
        <ul className="list">
          <li>
            <Link to="">Home</Link>
          </li>
          <Link to="customers">Customers</Link>
          <li>
            <a href="">Contracts</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

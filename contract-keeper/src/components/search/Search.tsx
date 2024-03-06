import searchSvg from "../../assets/search.svg"
import "./Search.css"

interface SearchProps {
  defaultValue: string
}

export default function Search({ defaultValue }: SearchProps) {
  return (
    <div className="search">
      <input
        id="q"
        className="input"
        type="search"
        name="q"
        placeholder="Contract or client name"
        defaultValue={defaultValue}
      />
      <img className="icon" src={searchSvg} alt="Search icon" />
    </div>
  )
}

import searchSvg from "../../assets/search.svg"
import "./Search.css"

interface SearchProps {
  defaultValue: string
  updateSearch: (event: React.ChangeEvent) => void
}

export default function Search({ defaultValue, updateSearch }: SearchProps) {
  return (
    <div className="search">
      <input
        id="q"
        className="input"
        type="search"
        name="q"
        placeholder="Contract or client name"
        defaultValue={defaultValue}
        onChange={(event) => updateSearch(event)}
      />
      <img className="icon" src={searchSvg} alt="Search icon" />
    </div>
  )
}

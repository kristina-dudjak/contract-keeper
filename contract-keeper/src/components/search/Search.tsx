import { useEffect, useState } from "react"
import searchSvg from "../../assets/search.svg"

interface SearchProps {
  onQueryChange: (query: string) => void
}

export default function Search({ onQueryChange }: SearchProps) {
  const [query, setQuery] = useState<string>("")

  useEffect(() => {
    const debounce = setTimeout(() => {
      onQueryChange(query)
    }, 300)
    return () => clearTimeout(debounce)
  }, [query])

  return (
    <div className="search">
      <input
        className="searchInput"
        type="text"
        value={query}
        placeholder="Contract or client name"
        onChange={(e) => setQuery(e.target.value)}
      />
      <img className="searchIcon" src={searchSvg} alt="Search icon" />
    </div>
  )
}

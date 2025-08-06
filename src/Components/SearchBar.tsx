import React from "react"


interface SearchBarProps {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search for recipes"
      className="w-full rounded-md mt-4 p-3 border-4 shadow-sm focus:outline-none"
    />
  )
}

export default SearchBar

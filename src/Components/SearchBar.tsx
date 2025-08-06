
const searchBar = ({searchTerm, setSearchTerm}) => {
  return (
    <>
      <input type="text"
      value={searchTerm}
      onChange={(e) =>setSearchTerm(e.target.value)} 
      placeholder="Search for recepies" 
      className="w-full rounded-md mt-4 p-3 border-4 shadow-sm focus:outline-none"/>
    </>
  )
}

export default searchBar

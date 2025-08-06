type FilterDropdownProps = {
  label: string,
  options: string[],
  selected: string,
  onchange: (value: string) => void
}

const FilterDropdown = ({
  label,
  options,
  selected,
  onchange
}: FilterDropdownProps) => {
  return (
    <div>
      <label className="text-sm block mb-1">{label}</label>
      <select
        className="p-2 border w-full"
        value={selected}
        onChange={(e) => onchange(e.target.value)}
      >
        <option value="">All</option>
        {
          options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option> 
          ))
        }
      </select>
    </div>
  )
}

export default FilterDropdown

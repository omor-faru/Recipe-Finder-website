// import { useEffect, useState } from "react"
// import RecipeCard from "../Components/RecipeCard"
// import SearchBar from "../Components/SearchBar"
// import FilterDropdown from "../Components/FilterDropdown"
// import { useQuery } from "@tanstack/react-query"
// import { getAreas, getCategories } from "../api/filters"

// const Home = () => {
//   const [recipes, setRecipes] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [category, setCategory] = useState("")
//   const [area, setArea] = useState("")

 
//   const { data: categories = [] } = useQuery({
//     queryKey: ["categories"],
//     queryFn: getCategories
//   })

//   const { data: areas = [] } = useQuery({
//     queryKey: ["areas"],
//     queryFn: getAreas
//   })

 
//   useEffect(() => {
//     const fetchRecipes = async () => {
//       setLoading(true)
//       let url = ""

//       if (searchTerm) {
//         url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
//       } else if (category) {
//         url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
//       } else if (area) {
//         url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
//       } else {
//         url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
//       }

//       const res = await fetch(url)
//       const data = await res.json()
//       setRecipes(data.meals || [])
//       setLoading(false)
//     }

//     fetchRecipes()
//   }, [searchTerm, category, area])

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <div className="grid md:grid-cols-3 gap-4 mb-6">
//         <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

//         <FilterDropdown
//           label="Category"
//           options={categories}
//           selected={category}
//           onchange={(val) => {
//             setCategory(val)
//             setSearchTerm("")
//             setArea("")
//           }}
//         />

//         <FilterDropdown
//           label="Area"
//           options={areas}
//           selected={area}
//           onchange={(val) => {
//             setArea(val)
//             setSearchTerm("")
//             setCategory("")
//           }}
//         />
//       </div>

//       <div>
//         {loading ? (
//           <p>Loading...</p>
//         ) : recipes.length === 0 ? (
//           <p className="text-red-500">Recipe not found</p>
//         ) : (
//           <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
//             {recipes.map((item) => (
//               <div
//                 key={item.idMeal}
//                 className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg"
//               >
//                 <RecipeCard item={item} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Home



import { useEffect, useState } from "react"
import RecipeCard from "../Components/RecipeCard"
import SearchBar from "../Components/SearchBar"
import FilterDropdown from "../Components/FilterDropdown"
import { useQuery } from "@tanstack/react-query"
import { getAreas, getCategories } from "../api/filters"

// Recipe টাইপ ডিফাইন
interface Recipe {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strSource: string
}

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]) // টাইপ যোগ করা
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("")
  const [area, setArea] = useState("")

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories
  })

  const { data: areas = [] } = useQuery({
    queryKey: ["areas"],
    queryFn: getAreas
  })

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true)
      let url = ""

      if (searchTerm) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      } else if (category) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      } else if (area) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      }

      const res = await fetch(url)
      const data = await res.json()
      setRecipes(data.meals || [])
      setLoading(false)
    }

    fetchRecipes()
  }, [searchTerm, category, area])

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <FilterDropdown
          label="Category"
          options={categories}
          selected={category}
          onchange={(val: string) => {
            setCategory(val)
            setSearchTerm("")
            setArea("")
          }}
        />

        <FilterDropdown
          label="Area"
          options={areas}
          selected={area}
          onchange={(val: string) => {
            setArea(val)
            setSearchTerm("")
            setCategory("")
          }}
        />
      </div>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : recipes.length === 0 ? (
          <p className="text-red-500">Recipe not found</p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes.map((item: Recipe) => (
              <div
                key={item.idMeal}
                className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg"
              >
                <RecipeCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home

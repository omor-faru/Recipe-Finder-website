import { Heart, HeartIcon } from "lucide-react"
import { useState, useEffect } from "react"

const RecipeCard = ({ item }) => {
  const [fav, setFav] = useState(false)


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]")
    const exists = saved.some((f) => f.idMeal === item.idMeal)
    setFav(exists)
  }, [item.idMeal])

  const toggleFavourite = () => {
    let saved = JSON.parse(localStorage.getItem("favorites") || "[]")

    if (fav) {
      
      saved = saved.filter((f) => f.idMeal !== item.idMeal)
      setFav(false)
    } else {
      
      saved.push(item)
      setFav(true)
    }

    localStorage.setItem("favorites", JSON.stringify(saved))
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all relative">
      <img
        src={item.strMealThumb}
        alt={item.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{item.strMeal}</h2>
        <a
          href={item.strSource}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 font-medium hover:underline"
        >
          View Recipe
        </a>
      </div>
      <button
        onClick={toggleFavourite}
        className="absolute top-2 right-2 p-2 rounded-full bg-white shadow"
      >
        {fav ? (
          <HeartIcon className="text-red-500" />
        ) : (
          <Heart className="text-gray-600" />
        )}
      </button>
    </div>
  )
}

export default RecipeCard


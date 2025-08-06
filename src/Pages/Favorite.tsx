import { useEffect, useState } from "react"
import { HeartCrack } from "lucide-react"
import RecipeCard from "../Components/RecipeCard"

const Favorite = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavorites(saved)
  }, [])

  return (
    <div className="p-7 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">
        Your Favorite Recipes
      </h2>

      {favorites.length === 0 ? (
        <div className="border border-orange-300 rounded-xl p-8 shadow-sm inline-block bg-white/70">
          <HeartCrack className="text-pink-500 w-12 h-12 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-orange-500 mb-2">
            No Favorites Yet
          </h3>
          <p className="text-orange-400 max-w-xs mx-auto">
            You haven't added any recipes to your favorites yet.
            Click the heart icon on a recipe to save it here!
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((item) => (
            <RecipeCard key={item.idMeal} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorite



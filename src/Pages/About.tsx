const About = () => {
  const features = [
    {
      title: "Search Recipes",
      description: "Find recipes from all over the world using a public meals API.",
      icon: "🍜"
    },
    {
      title: "Save Favorites",
      description: "Click the heart icon to save your favorite recipes for quick access later.",
      icon: "❤️"
    },
    {
      title: "Surprise Me!",
      description: "Feeling adventurous? Click the surprise button to get a random recipe suggestion.",
      icon: "🎲"
    }
  ]

  return (
    <div className="p-7 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-orange-600">About FlavorFinder</h2>
      <p className="text-gray-600 mb-8 text-2xl">
        FlavorFinder is your go-to place for discovering delicious meals with just a few clicks.
        Whether you know what you want or want to try something new, we've got you covered!
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:scale-[1.02] transition-all"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About

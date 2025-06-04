import RecipeCard from "./RecipeCard";

const FeaturedRecipes = () => {
  const recipes = [
    {
      title: "Berry Blast Vegan Protein Smoothie",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop&crop=center",
      date: "9/20/2023",
      creator: "gegez",
      href: "#"
    },
    {
      title: "Creamy Vegan Dal Makhani",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop&crop=center",
      date: "4/19/2023",
      creator: "",
      href: "#"
    },
    {
      title: "Crispy Almond Butter Vegan Cookies",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop&crop=center",
      date: "4/24/2023",
      creator: "",
      href: "#"
    },
    {
      title: "Creamy Vegan Fettuccine with Cashew Sauce",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=400&fit=crop&crop=center",
      date: "4/19/2023",
      creator: "",
      href: "#"
    },
    {
      title: "Vegan Spaghetti Piccata with Cashew Cream Sauce",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop&crop=center",
      date: "4/19/2023",
      creator: "",
      href: "#"
    },
    {
      title: "Vegan Blueberry Cornbread Muffins",
      image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=400&fit=crop&crop=center",
      date: "4/19/2023",
      creator: "",
      href: "#"
    },
    {
      title: "Sweet Potato, Chickpea and Coconut Stew",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop&crop=center",
      date: "4/19/2023",
      creator: "",
      href: "#"
    },
    {
      title: "Autumn Apple Bliss Cake",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&crop=center",
      date: "10/8/2023",
      creator: "Ukropchik",
      href: "#"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mb-8 py-8 bg-white">
      <h2 className="my-6 text-center text-4xl font-bold font-secondary">
        Featured AI Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRecipes;
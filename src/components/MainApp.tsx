import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  creator: {
    name: string;
    avatar: string;
  };
}

const MainApp: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/recipes");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="main-app">
      <div className="recipe-cards-container">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default MainApp;

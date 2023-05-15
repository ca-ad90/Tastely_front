import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const MainApp = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    //Backendkod koppling eventuellt!
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/api/recipes');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
      console.log(test)
    };

    fetchRecipes();
  }, []);

  return (
    <div className="main-app">
      <h1>Tastely</h1>
      <div className="recipe-cards-container">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default MainApp;

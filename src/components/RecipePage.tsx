import React, { useEffect, useState } from 'react';
import './RecipePage.css';

interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

function RecipePage() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    try {
      const recipeId = getRecipeIdFromUrl();
      const response = await fetch(`http://localhost:8080/recipe/${recipeId}`); // Replace with your API endpoint
      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRecipeIdFromUrl = (): number => {
    const urlParts = window.location.href.split('/');
    const recipeId = parseInt(urlParts[urlParts.length - 1]);
    return isNaN(recipeId) ? 1 : recipeId;
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-page">
      <div className="recipe-details">
        <div className="recipe-header">
          <div className="recipe-avatar">
            {/* Display the recipe's avatar */}
          </div>
          <div className="recipe-creator">
            {/* Display the recipe's creator */}
          </div>
        </div>
        <div className="recipe-content">
          <div className="recipe-image">
            {/* Display the recipe's image */}
          </div>
          <div className="recipe-name">{recipe.name}</div>
          <div className="recipe-description">{recipe.description}</div>
          <div className="recipe-info">
            <div className="recipe-info-item">
              {/* Display prep time */}
            </div>
            <div className="recipe-info-item">
              {/* Display servings */}
            </div>
          </div>
          <div className="recipe-ingredients">
            <h3 className="recipe-ingredients-title">Ingredients</h3>
            <ul className="recipe-ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li className="recipe-ingredients-list-item" key={index}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="recipe-instructions">
            <h3 className="recipe-instructions-title">Instructions</h3>
            <ol className="recipe-instructions-list">
              {recipe.instructions.map((instruction, index) => (
                <li className="recipe-instructions-list-item" key={index}>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;

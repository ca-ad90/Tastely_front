import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";
import "./RecipePage.css";

interface RecipePageProps {
  id: string;
}

interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

function RecipePage() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [searchId, setSearchId] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    try {
      const recipeId = getRecipeIdFromUrl();
      const response = await fetch(`http://localhost:8080/recipe/${recipeId}`);
      if (response.ok) {
        const data = await response.json();
        setRecipe(data);
      } else {
        setRecipe(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getRecipeIdFromUrl = (): number => {
    const urlParts = window.location.href.split("/");
    const recipeId = parseInt(urlParts[urlParts.length - 1]);
    return isNaN(recipeId) ? 1 : recipeId;
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const id = parseInt(searchId);
    if (isNaN(id) || id < 1) {
      setError(true);
    } else {
      setError(false);
      navigate(`/recipe/${id}`);
      setSearchId("");
      fetchRecipe();
    }
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-page-container">
      <div className="recipe-page">
        <HamburgerMenu />
        <div className="recipe-details">
          <div className="recipe-header">
            <div className="recipe-avatar">{/* ev mer info */}</div>
            <div className="recipe-creator">{/* ev mer info */}</div>
          </div>
          <div className="recipe-content">
            <div className="recipe-image">{/* ev mer info */}</div>
            <div className="recipe-name">{recipe.name}</div>
            <div className="recipe-description">{recipe.description}</div>
            <div className="recipe-info">
              <div className="recipe-info-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="currentColor" d="M12 2L2 7l1 15h18l1-15L12 2zm0 2l8 3H4L12 4zm-2 7v4h4v-4h-4z" />
                </svg>
                <span className="recipe-info-item-text">Cook Time: {recipe.cookTime} minutes</span>
              </div>
              <div className="recipe-info-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M19.7 6.3l-1.4 1.4c1.2 1.2 1.9 2.8 1.9 4.5s-.7 3.3-1.9 4.5-2.8 1.9-4.5 1.9-3.3-.7-4.5-1.9S8 15.1 8 13.4c0-1.7.7-3.3 1.9-4.5L8.3 6.3C6.7 7.9 6 10 6 12.1s.7 4.2 2.1 5.6S11.8 20 14 20s4.2-.7 5.6-2.1S20 15.9 20 13.7c0-2.1-.7-4.2-2.1-5.6zM14 18c-1.9 0-3.5-1.6-3.5-3.5S12.1 11 14 11s3.5 1.6 3.5 3.5S15.9 18 14 18zm0-6c-1.2 0-2.3.4-3.2 1.2s-1.4 1.9-1.4 3.2c0 1.2.4 2.3 1.2 3.2s1.9 1.4 3.2 1.4 2.3-.4 3.2-1.2 1.4-1.9 1.4-3.2c0-1.2-.4-2.3-1.2-3.2s-1.9-1.4-3.2-1.4zm0 3c.6 0 1.1.2 1.6.6s.6 1 .6 1.6-.2 1.1-.6 1.6-1 .6-1.6.6-1.1-.2-1.6-.6-.6-1-.6-1.6.2-1.1.6-1.6 1-.6 1.6-.6z"
                  />
                </svg>
                <span className="recipe-info-item-text">Servings: {recipe.servings}</span>
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
        <div className="search-description">Search for other recipes by their ID!</div>
        {error && <div className="warning">Invalid ID</div>}
        <form onSubmit={handleSearch}>
          <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  );
}

export default RecipePage;

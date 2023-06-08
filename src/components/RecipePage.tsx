import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HamburgerMenu from "../components/HamburgerMenu";
import './RecipePage.css';

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
  const [searchId, setSearchId] = useState('');
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
    const urlParts = window.location.href.split('/');
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
      setSearchId('');
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
          <div className="recipe-avatar">
            {/* ev mer info */}
          </div>
          <div className="recipe-creator">
            {/* ev mer info */}
          </div>
        </div>
        <div className="recipe-content">
          <div className="recipe-image">
            {/* ev mer info */}
          </div>
          <div className="recipe-name">{recipe.name}</div>
          <div className="recipe-description">{recipe.description}</div>
          <div className="recipe-info">
            <div className="recipe-info-item">
              {/* ev mer info */}
            </div>
            <div className="recipe-info-item">
              {/* ev mer info */}
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
      <div className="search-description">
        Search for other recipes by their ID!
      </div>
      {error && <div className="warning">Invalid ID</div>}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button type="submit">Go</button>
      </form>
    </div>
    </div>
  );
}

export default RecipePage;

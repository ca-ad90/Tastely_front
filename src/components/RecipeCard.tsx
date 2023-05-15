import React from 'react';

interface RecipeCardProps {
  recipe: {
    name: string;
    description: string;
    image: string;
    creator: {
      name: string;
      avatar: string;
    };
  };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-card-header">
        <img className="recipe-card-avatar" src={recipe.creator.avatar} alt={recipe.creator.name} />
        <span className="recipe-card-creator">{recipe.creator.name}</span>
      </div>
      <img className="recipe-card-image" src={recipe.image} alt={recipe.name} />
      <div className="recipe-card-content">
        <h3 className="recipe-card-title">{recipe.name}</h3>
        <p className="recipe-card-description">{recipe.description}</p>
        <div className="recipe-card-footer">
          <button className="recipe-card-like-button">Like</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

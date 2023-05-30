import React, { useState } from 'react';
import './RecipeCard.css';
import { Link, useNavigate } from 'react-router-dom';
import bookmarkIcon from '../assets/bookmark-icon.svg';

interface RecipeCardProps {
  recipe: {
    id: string;
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
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate();

  const handleBookmarkToggle = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };

  const handleClick = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  const handleUploadClick = () => {
    navigate('/upload');
  };

  return (
    <div className="recipe-card" onClick={handleClick}>
      <div className="recipe-card-header">
        <Link to="/profile">
          <img className="recipe-card-avatar" src={recipe.creator.avatar} alt={recipe.creator.name} />
        </Link>
        <span className="recipe-card-creator">{recipe.creator.name}</span>
      </div>
      <div className="recipe-card-content">
        <img className="recipe-card-image" src={recipe.image} alt={recipe.name} />
        <h3 className="recipe-card-title">{recipe.name}</h3>
        <p className="recipe-card-description">{recipe.description}</p>
        <div className="recipe-card-footer"></div>
      </div>
      <button className={`bookmark-button ${isBookmarked ? 'bookmarked' : ''}`} onClick={handleBookmarkToggle}>
        <img className="bookmark-icon" src={bookmarkIcon} alt="Bookmark" />
        {isBookmarked ? 'Bookmarked' : 'Bookmark'}
      </button>
      <button className="upload-button" onClick={handleUploadClick}>
        Upload Recipe
      </button>
    </div>
  );
};

export default RecipeCard;

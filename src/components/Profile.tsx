import React from "react";
import "./Profile.css";
import HamburgerMenu from "../components/HamburgerMenu";

interface Recipe {
  name: string;
  description: string;
  image: string;
}

interface ProfileProps {
  user: {
    name: string;
    avatar: string;
    favoriteRecipes: Recipe[];
  };
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const { name, avatar, favoriteRecipes } = user;

  return (
    <div className="profile">
      <HamburgerMenu />
      <div className="profile-header">
        <img className="profile-avatar" src={avatar} alt={name} />
        <h2 className="profile-name">{name}</h2>
      </div>
      <h3 className="profile-favorites-title">Favorite Recipes</h3>
      <div className="profile-favorites">
        {favoriteRecipes.map((recipe) => (
          <div key={recipe.name} className="profile-favorite">
            <img className="profile-favorite-image" src={recipe.image} alt={recipe.name} />
            <div className="profile-favorite-details">
              <h4 className="profile-favorite-name">{recipe.name}</h4>
              <p className="profile-favorite-description">{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

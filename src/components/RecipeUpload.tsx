import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";
import Upload from "../components/Upload";

const RecipeUpload: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState("");
  const [creator, setCreator] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/recipe", {
        name,
        description,
        ingredients: ingredients.split("\n"),
        instructions: instructions.split("\n"),
      });

      const createdRecipeId = response.data.id;
      navigate(`/recipe/${createdRecipeId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <HamburgerMenu />
      <h2>Upload Recipe</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea id="instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        </div>
        <button type="submit">Upload</button>
      </form>
      <Upload />
    </div>
  );
};

export default RecipeUpload;

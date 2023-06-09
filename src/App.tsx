import React, { useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./index.css";
import HamburgerMenu from "./components/HamburgerMenu";
import RecipeCard from "./components/RecipeCard";
import MainApp from "./components/MainApp";
import sven from "./assets/hidethepainharold.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import RecipeUpload from "./components/RecipeUpload";
import Upload from "./components/Upload";
import Discover from "./components/Discover";
import SavedPageMobile from "./components/SavedPageMobile";
import LandingPage from "./components/LandingPage";
import LandingPageTablet from "./components/LandingPageTablet";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MainPage from "./components/MainPage";
import MainPageTablet from "./components/MainPageTablet";
import RecipePage from "./components/RecipePage";

function App() {
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const fileSelectedHandler = (event) => {
    setFile(event.target.files[0]);
  };

  const fileUploadHandler = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:8080/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response && err.response.status === 500) {
        console.log("There was a problem with the server");
      } else if (err.response && err.response.data && err.response.data.msg) {
        console.log(err.response.data.msg);
      } else {
        console.log("An error occurred while uploading the file");
      }
    }
  };

  const [count, setCount] = useState(0);

  const recipe = {
    id: "1",
    name: "TEST",
    description: "This TEST",
    image: sven,
    creator: {
      name: "Sven Svensson",
      avatar: sven,
    },
    servings: 4,
    cookTime: 30,
    ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
    instructions: ["Step 1: Do this", "Step 2: Do that", "Step 3: Finally, do this"],
  };

  return (
    <Router>
      <div className="App">
        {/* <HamburgerMenu /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<LandingPageTablet />} />
          <Route path="/mainapp" element={<MainApp />} />
          <Route
            path="/profile"
            element={
              <Profile user={{ name: recipe.creator.name, avatar: recipe.creator.avatar, favoriteRecipes: [] }} />
            }
          />
          <Route path="/recipe/:id" element={<RecipePage recipe={recipe} />} />
          <Route path="/upload" element={<RecipeUpload />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/saved" element={<SavedPageMobile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/mainpage" element={<MainPageTablet />} />
        </Routes>
        <div className="top-links">
          <Link to="/profile" className="small-avatar-link">
            <img src={recipe.creator.avatar} className="small-avatar" alt={recipe.creator.name} />
          </Link>
          {/* <Link to="/upload" className="upload-recipe"></Link> */}
          <Link to="/discover" className="discover-recipe"></Link>
          <Link to="/saved" className="saved-recipe"></Link>
        </div>

        <Link to="/login" className="login-link"></Link>
        <h1 className="App-header">File upload</h1>
        <section>
          <input className="App-input" type="file" onChange={fileSelectedHandler} />
          <button className="App-button" onClick={fileUploadHandler}>
            Upload
          </button>
        </section>
        {uploadedFile && (
          <div className="upload">
            <h3 className="upload_header">{uploadedFile.fileName}</h3>
            <img className="upload_image" src={uploadedFile.filePath} alt="logo" />
          </div>
        )}
        <p className="read-the-docs">Click on the Vite and React logos to learn more.</p>
      </div>
    </Router>
  );
}

export default App;

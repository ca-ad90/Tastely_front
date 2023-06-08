import { useState } from "react";
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
  element={<Profile user={{ name: recipe.creator.name, avatar: recipe.creator.avatar, favoriteRecipes: [] }} />}
/>
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/upload" element={<RecipeUpload />} />
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
        {/* <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>*/}
        <p className="read-the-docs">Click on the Vite and React logos to learn more.</p>
      </div>
    </Router>
  );
}

export default App;

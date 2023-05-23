import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HamburgerMenu from "./components/HamburgerMenu";
import RecipeCard from "./components/RecipeCard";
import MainApp from "./components/MainApp";
import sven from "./assets/hidethepainharold.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Upload from "./components/Upload";
import Discover from "./components/Discover";
import Saved from "./components/Saved";
import LandingPage from "./components/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  const recipe = {
    name: "TEST",
    description: "This TEST",
    image: sven,
    creator: {
      name: "Sven Svensson",
      avatar: sven,
    },
  };

  return (
    <Router>
      <div className="App">
        <HamburgerMenu />
        <LandingPage />
        <MainApp />
        <Routes>
          <Route path="/" element={<RecipeCard recipe={recipe} />} />
          <Route
            path="/profile"
            element={<Profile name={recipe.creator.name} avatar={recipe.creator.avatar} favoriteRecipes={[]} />}
          />
          <Route path="/upload" element={<Upload />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
        <div className="top-links">
          <Link to="/profile" className="small-avatar-link">
            <img src={recipe.creator.avatar} className="small-avatar" alt={recipe.creator.name} />
          </Link>
          <Link to="/upload" className="upload-recipe"></Link>
          <Link to="/discover" className="discover-recipe"></Link>
          <Link to="/saved" className="saved-recipe"></Link>
          <a href="https://vitejs.dev/" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org/" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </Router>
  );
}

export default App;

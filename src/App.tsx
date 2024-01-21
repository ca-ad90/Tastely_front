import "./App.css";
import "./index.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import HamburgerMenu from "./components/HamburgerMenu";
import RecipeCard from "./components/RecipeCard";
import MainApp from "./components/MainApp";
import sven from "./assets/hidethepainharold.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import RecipeUpload from "./components/RecipeUpload";
import Upload from "./components/Upload";
import Discover from "./pages/Discover";
import SavedPageMobile from "./components/SavedPageMobile";
import LandingPage from "./pages/LandingPage";
import LandingPageTablet from "./pages/LandingPageTablet";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MainPage from "./components/MainPage";
import MainPageTablet from "./components/MainPageTablet";
import RecipePage from "./components/RecipePage";
import authentication from "./authentication";

function App() {
  const [file, setFile] = useState<any>(null);
  const [uploadedFile, setUploadedFile] = useState<any>(null);

  const fileSelectedHandler = (event: any) => {
    setFile(event.target.files[0]);
  };

  const fileUploadHandler = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = (await axios.post("http://localhost:8080/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })) as any;

      const { fileName, filePath }: any = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err: any) {
      if (err.response && err.response.status === 500) {
        console.log("There was a problem with the server");
      } else if (err.response && err.response.data && err.response.data.msg) {
        console.log(err.response.data.msg);
      } else {
        console.log("An error occurred while uploading the file");
      }
    }
  };
  useEffect(() => {
    console.log(document.location.href);
  }, [document.location.href]);
  const [count, setCount] = useState(0);
  return (
    <Router>
      <header>{<HamburgerMenu />}</header>
      <main>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/mainapp" element={<MainApp />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
          <Route path="/upload" element={<RecipeUpload />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/saved" element={<SavedPageMobile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/mainpage" element={<MainPageTablet />} />
        </Routes>
      </main>

      <div className="top-links">
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
    </Router>
  );
}

export default App;

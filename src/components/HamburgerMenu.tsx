import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./HamburgerMenu.css";
import authentication from "../authentication";
import Upload from "./Upload";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loc, setLoc] = useState(useLocation());
  const navigate = useNavigate();
  useEffect(() => {
    console.log();
    console.log(loc);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleUploadClick = () => {
    navigate("/upload");
    closeMenu();
  };
  const handleDiscoverClick = () => {
    navigate("/discover");
    closeMenu();
  };
  const handleSavedClick = () => {
    navigate("/saved");
    closeMenu();
  };
  const handleProfileClick = () => {
    navigate("/profile");
    closeMenu();
  };
  const handleLoginLogoutClick = async () => {
    if (isLoggedIn) {
      try {
        await axios.post("http://localhost:8080/logout");
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        navigate("/login");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    } else {
      navigate("/login");
    }
    closeMenu();
  };
  const handleHomeNavigate = () => {
    navigate("/home");
  };

  const navigatePage: (x: any) => any = async (page: any) => {
    switch (page.toLowerCase()) {
      case "upload":
        return handleUploadClick;
        break;
      case "discover":
        return handleDiscoverClick;
        break;
      case "saved":
        return handleSavedClick;
        break;
      case "profile":
        return handleProfileClick;
        break;
      case "signin":
      case "signout":
        return handleLoginLogoutClick;
        break;
      default:
        return handleHomeNavigate;
        break;
    }
  };

  return (
    <>
      <div className="hamburger-menu">
        <Link to="/">
          <h1>Tastely</h1>
        </Link>
        {isMobileSize && (
          <button className="toggle-button" onClick={handleHomeNavigate}>
            {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        )}

        {(isMobileSize && isOpen) || !isMobileSize ? (
          <div className="hamburger-icon">
            <div className="menu-box upload">
              <button className="upload-button" onClick={handleUploadClick}>
                <h2>Upload</h2>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="menu-box discover">
              <button className="discover-button" onClick={handleDiscoverClick}>
                <h2>Discover</h2>
              </button>
            </div>
            <div className="menu-box saved">
              <button className="saved-button" onClick={handleSavedClick}>
                <h2>Saved</h2>
              </button>
            </div>
            <div className="menu-box myprofile">
              <button className="myprofile-button" onClick={handleProfileClick}>
                <h2>My Profile</h2>
              </button>
            </div>
            <div className="menu-box login">
              <button className="login-button" onClick={handleHomeNavigate}>
                <h2>{isLoggedIn ? "Logout" : "Login"}</h2>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default HamburgerMenu;

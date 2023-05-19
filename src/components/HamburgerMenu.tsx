import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./HamburgerMenu.css";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen size

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

  const handleLoginLogoutClick = () => {
    // Implementera inloggning/utloggning logik här
    closeMenu();
  };

  return (
    <div className="hamburger-menu">
      <h1>Tastely</h1>
      {isMobileSize && (
        <button className="toggle-button" onClick={toggleMenu}>
          {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
      )}

      {(isMobileSize && isOpen) || !isMobileSize ? (
        <div className="hamburger-icon">
          <div className="menu-box-upload">
            <button className="upload-button" onClick={handleUploadClick}>
              <h2>Upload</h2>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="menu-box-discover">
            <button className="discover-button" onClick={handleDiscoverClick}>
              <h2>Discover</h2>
            </button>
          </div>
          <div className="menu-box-saved">
            <button className="saved-button" onClick={handleSavedClick}>
              <h2>Saved</h2>
            </button>
          </div>
          <div className="menu-box-myprofile">
            <button className="myprofile-button" onClick={handleProfileClick}>
              <h2>My Profile</h2>
            </button>
          </div>
          <div className="menu-box-login-logout">
            <button className="login-logout-button" onClick={handleLoginLogoutClick}>
              <h2>Login/Logout</h2>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HamburgerMenu;

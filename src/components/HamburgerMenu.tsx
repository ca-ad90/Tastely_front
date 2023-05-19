import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [collapse, setCollapse] = useState("hamburger__menu");
  const [myHamburgerMenu, setHamburgerMenu] = useState([]);
  const [togglerIcon, setTogglerIcon] = useState("toggler__icon");

  useEffect(() => {
    setHamburgerMenu(myHamburgerMenu());
  }, []);
  const onToggle = () => {
    togglerIcon === "toggler__icon" ? setTogglerIcon("toggler__icon toggle") : setTogglerIcon("toggler__icon");
    collapse === "hamburger__menu" ? setCollapse("hamburger__menu nav__collapse") : setCollapse("hamburger__menu");
  };

  return (
    <>
      <div className="hamburger__wrap">
        <div className="container">
          <nav className="nav">
            <Link to="/" className="hamburger__abr">
              ABR
            </Link>
            <ul className={collapse}>
              {HamburgerMenu.map((item) => (
                <li key={item.id} className="hamburger__item">
                  <Link to={item.href} className="hamburger__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={togglerIcon} onClick={onToggle}>
              <div className="line__1"></div>
              <div className="line__2"></div>
              <div className="line__3"></div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;

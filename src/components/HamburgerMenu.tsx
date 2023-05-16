import React, { useEffect, useState } from "react";

const HamburgerMenu = () => {
  const [collapse, setCollapse] = useState("nav__menu");
  const [HamburgerMenu, setHamburgerMenu] = useState([]);
  const [togglerIcon, setTogglerIcon] = useState("toggler__icon");

  useEffect(() => {
    setHamburgerMenu(myHamburgerMenu());
  }, []);
  let x = "2hej";
  const onToggle = () => {
    togglerIcon === "toggler__icon" ? setTogglerIcon("toggler__icon toggle") : setTogglerIcon("toggler__icon");
    collapse === "hamburger__menu" ? setCollapse("hamburger__menu nav__collapse") : setCollapse("hamburger__menu");
  };
};

export default HamburgerMenu;

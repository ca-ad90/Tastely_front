import React, { useState, useContext } from "react";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Tastely</h1>
      <HamburgerMenu />
    </div>
  );
}

export default Navbar;

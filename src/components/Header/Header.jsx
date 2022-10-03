import React from "react";
import NavLinks from "../nav/NavLinks";
import "./Header.css"
const Header = () => {
  return (
    <div className="header">
      <div>
        <h2>Alan Shipley</h2>
      </div>
      <div>
        <NavLinks />
      </div>
      <div>
        <h2>Web Developer</h2>
      </div>
    </div>
  );
};

export default Header;

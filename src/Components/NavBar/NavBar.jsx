import React from "react";
import "./Navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar text-light mb-4">
      <div className="container-fluid">
        <h4 className="ms-5">Clima</h4>
        <img className="me-5" src="https://www.wunderground.com/static/i/c/v4/34.svg" width={50} />
      </div>
    </nav>
  );
};

export default NavBar;

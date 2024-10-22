import React from "react";
import "./Navbar.css";
import { Dropdown } from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="src\assets\1.2.png" alt="logo" className="logo" />
        <div className="nav-links">
          <div href="/eventi">
            <img src="src\assets\planner.png" alt="events" className="icons" />
            <p>Eventi</p>
          </div>
          <div href="/viaggi" id="viaggi">
            <img src="src\assets\travel.png" alt="travels" className="icons" />
            <p>Viaggi</p>
          </div>
          <div href="/recensioni">
            <img src="src\assets\reviews.png" alt="reviews" className="icons" />
            <p>Recensioni</p>
          </div>
        </div>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-right">
        <div>
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useContext } from "react";
import "./Navbar.css";
import { Dropdown } from "./Dropdown";
import { LanguageContext } from "../App";

export function Navbar() {
  const lang = useContext(LanguageContext);
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="src\assets\1.2.png" alt="logo" className="logo" />
        <div className="nav-links">
          <div href="/eventi">
            <img src="src\assets\planner.png" alt="events" className="icons" />
            <p>{lang === "it" ? "Eventi" : "Events"} </p>
          </div>
          <div href="/viaggi" id="viaggi">
            <img src="src\assets\travel.png" alt="travels" className="icons" />
            <p>{lang === "it" ? "Viaggi" : "Travels"}</p>
          </div>
          <div href="/recensioni">
            <img src="src\assets\reviews.png" alt="reviews" className="icons" />
            <p>{lang === "it" ? "Recensioni" : "Reviews"}</p>
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
}

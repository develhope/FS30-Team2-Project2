import React, { useContext } from "react";
import "./Navbar.css";
import { Dropdown } from "./Dropdown";
import { LanguageContext } from "../App";
import { Link } from "react-router-dom";

export function Navbar() {
  const lang = useContext(LanguageContext);
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src="src\assets\1.2.png" alt="logo" className="logo" />
        </Link>
        <div className="nav-links">
          <div href="/eventi">
            <Link to="/events">
              <img
                src="src\assets\planner.png"
                alt="events"
                className="icons"
              />
              <p>{lang === "it" ? "Eventi" : "Events"}</p>
            </Link>
          </div>
          <div href="/viaggi" id="viaggi">
            <Link to="/travels">
              <img
                src="src\assets\travel.png"
                alt="travels"
                className="icons"
              />
              <p>{lang === "it" ? "Viaggi" : "Travels"}</p>
            </Link>
          </div>
          <div href="/recensioni">
            <Link to="/reviews">
              <img
                src="src\assets\reviews.png"
                alt="reviews"
                className="icons"
              />

              <p>{lang === "it" ? "Recensioni" : "Reviews"}</p>
            </Link>
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

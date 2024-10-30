import React, { useContext } from "react";
import "./Navbar.css";
import { Dropdown } from "./Dropdown";
import { LanguageContext } from "../App";
import { Link } from "react-router-dom";
import { WoodBar } from "./WoodBar";

export function Navbar() {
  const lang = useContext(LanguageContext);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src="src\assets\eventive.png" alt="logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-center">
          <div className="nav-links">
            <div href="/eventi">
              <Link to="/events">
                <img
                  src="src\assets\planner.png"
                  alt="events"
                  className="icons"
                />
                <h4>{lang === "it" ? "Eventi" : "Events"}</h4>
              </Link>
            </div>
            <div href="/viaggi" id="viaggi">
              <Link to="/travels">
                <img
                  src="src\assets\travel.png"
                  alt="travels"
                  className="icons"
                />
                <h4>{lang === "it" ? "Viaggi" : "Travels"}</h4>
              </Link>
            </div>
            <div href="/recensioni">
              <Link to="/reviews">
                <img
                  src="src\assets\reviews.png"
                  alt="reviews"
                  className="icons"
                />

                <h4>{lang === "it" ? "Recensioni" : "Reviews"}</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-right">
          <div>
            <Dropdown />
          </div>
        </div>
      </nav>
      <div className="wood">
        <WoodBar />
      </div>
    </>
  );
}

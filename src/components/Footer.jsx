/** @format */

import "./footer.scss";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import React from "react";
import { WoodBar } from "../components/WoodBar";

export function Footer() {
  const { language } = useLanguage();
  return (
    <>
      <WoodBar />
      <footer className="footer">
        <div className="columnsContainer">
          <div className="footerColumns">
            <h4> {language === "it" ? "Chi Siamo" : "Who we are"}</h4>
            <ul>
              <li classname="footerLi">Noemi D'asta</li>
              <li classname="footerLi">Fiamma Ferrone</li>
              <li classname="footerLi">Giancosimo Calabrese</li>
              <li classname="footerLi">Andrea Cosma Marchetti</li>
              <li classname="footerLi">Stanislao Tufo</li>
            </ul>
          </div>
          <div className="footerColumns">
            <h4>{language === "it" ? "Link inerenti" : "Inerhent link"}</h4>
            <ul>
              <Link to="/About">
                <li classname="footerLi">
                    {language === "it" ? "Contatti" : "Contacts"}
                </li>
              </Link>
              <Link to="/Services">
                <li classname="footerLi">
                    {language === "it" ? "Servizi" : "Services"}
                </li>
              </Link>
              <Link to="/policy">
                <li classname="footerLi">
                    {language === "it"
                      ? "Politica della privacy"
                      : "Privicy Policy"}
                </li>
              </Link>
            </ul>
          </div>

          <div className="footerColumns">
            <h4>{language === "it" ? "Strumenti" : "Instruments"}</h4>
            <ul>
              <li classname="footerLi">React</li>
              <li classname="footerLi">GitHub</li>
              <li classname="footerLi">Discord</li>
            </ul>
          </div>
        </div>
       
        <div className="copyright">
          <Link to="/" className="footerLogo">
            <img
              src="src\assets\eventive.png"
              alt="logo"
              className="logo"
              width={80}
              height={50}
            />
          </Link>
          <p className="rights">
            &copy;<a href="/link">EventiveTravels</a>, all rights deserved.
          </p>
        </div>
      </footer>
    </>
  );
}

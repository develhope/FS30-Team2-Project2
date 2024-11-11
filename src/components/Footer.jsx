/** @format */

import "./footer.scss";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import React from "react";

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="footer">
      <div className="columnsContainer">
        <div className="footerColumns">
          <h4> {language === "it" ? "Chi Siamo" : "Who we are"}</h4>
          <ul>
            <li>Noemi D'asta</li>
            <li>Fiamma Ferrone</li>
            <li>Giancosimo Calabrese</li>
            <li>Andrea Cosma Marchetti</li>
            <li>Stanislao Tufo</li>
          </ul>
        </div>
        <div className="footerColumns">
          <h4>{language === "it" ? "Link inerenti" : "Inerhent link"}</h4>
          <ul>
            <Link to="/About">
              <li>
                <a href="/about">
                  {language === "it" ? "Contatti" : "Contacts"}
                </a>
              </li>
            </Link>
            <Link to="/Services">
              <li>
                <a href="/services">
                  {language === "it" ? "Servizi" : "Services"}
                </a>
              </li>
            </Link>
            <Link to="/policy">
              <li>
                <a href="/PrivacyPolicy">
                  {language === "it"
                    ? "Politica della privacy"
                    : "Privicy Policy"}
                </a>
              </li>
            </Link>
          </ul>

        </div>

        <div className="footerColumns">
          <h4>{language === "it" ? "Strumenti" : "Instruments"}</h4>
          <ul>
            <li>React</li>
            <li>GitHub</li>
            <li>Discord</li>
          </ul>
        </div>
      </div>
      <div className="socialIcons">
        <a href="http://"></a>
        <a href="http://"></a>
      </div>
      <div className="copyright">
      <Link to="/"  className="footerLogo">
            <img src="src\assets\eventive.png" alt="logo" className="logo" width={50} height={50}/>
          </Link>
        <p>
          &copy;<a href="/link">EventiveTravels</a>, all rights deserved.
        </p>
      </div>
    </footer>
  );
}

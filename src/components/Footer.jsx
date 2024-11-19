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
            <h4 className="firstTitle" id="footerH4">
              {" "}
              {language === "it" ? "Chi Siamo" : "Who we are"}
            </h4>
            <ul id="footerUl">
              <li className="footerLi">Noemi D'asta</li>
              <li className="footerLi">Fiamma Ferrone</li>
              <li className="footerLi">Giancosimo Calabrese</li>
              <li className="footerLi">Andrea Cosma Marchetti</li>
              <li className="footerLi">Stanislao Tufo</li>
            </ul>
          </div>
          <div className="footerColumns">
            <h4 id="footerH4">
              {language === "it" ? "Link inerenti" : "Inerhent link"}
            </h4>
            <ul id="footerUl">
              <Link to="/About" className="links">
                <li className="footerLi">
                  {language === "it" ? "Contatti" : "Contacts"}
                </li>
              </Link>
              <Link to="/Services" className="links">
                <li className="footerLi">
                  {language === "it" ? "Servizi" : "Services"}
                </li>
              </Link>
              <Link to="/policy" className="links">
                <li className="footerLi">
                  {language === "it"
                    ? "Politica della privacy"
                    : "Privicy Policy"}
                </li>
              </Link>
            </ul>
          </div>

          <div className="footerColumns">
            <h4 id="footerH4">
              {language === "it" ? "Strumenti" : "Instruments"}
            </h4>
            <ul id="footerUl" className="mediaUl">
              <li className="footerLi">React</li>
              <li className="footerLi">GitHub</li>
              <li className="footerLi">Discord</li>
            </ul>
          </div>
        </div>
        <div className="mediaLogo">
          <img
            src="src\assets\eventive.png"
            alt="logo"
            className="footerLogo"
            width={100}
            height={80}
          />
          <p className="endFooter">
            &copy;
            <Link to="/">EventiveTravels</Link>
            {language === "it"
              ? ", tutti i diritti riservati."
              : ", all rights deserved."}
          </p>
        </div>
      </footer>
    </>
  );
}

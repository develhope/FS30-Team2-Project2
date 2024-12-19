/** @format */

import "./footer.scss";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import React from "react";

export function Footer() {
  const { language } = useLanguage();
  return (
    <>
      <footer className="footer">
        <div className="columnsContainer">
          <div className="footerColumns">
            <h3 className="footerTitles" id="firstTitle">
              {" "}
              {language === "it" ? "Chi Siamo" : "Who we are"}
            </h3>
            <ul id="footerUl">
              <li className="footerLi">Noemi D'asta</li>
              <li className="footerLi">Fiamma Ferrone</li>
              <li className="footerLi">Giancosimo Calabrese</li>
              <li className="footerLi">Andrea Cosma Marchetti</li>
              <li className="footerLi">Stanislao Tufo</li>
            </ul>
          </div>
          <div className="footerColumns">
            <h3 className="footerTitles">
              {language === "it" ? "Link inerenti" : "Inerhent link"}
            </h3>
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
            <h3 className="footerTitles">
              {language === "it" ? "Strumenti" : "Instruments"}
            </h3>
            <ul id="footerUl" className="mediaUl">
              <li className="footerLi">React</li>
              <li className="footerLi">GitHub</li>
              <li className="footerLi">Discord</li>
            </ul>
          </div>
        </div>
        <div className="mediaLogo">
          &copy;<Link to="/">EventiveTravels</Link>
        </div>
        <p className="endFooter">
          {language === "it"
            ? " tutti i diritti riservati."
            : " all rights deserved."}
        </p>
      </footer>
    </>
  );
}

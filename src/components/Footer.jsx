/** @format */

import "./footer.scss";

import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="footer">
      <div className="columnsContainer">
        <div className="footerColumns">
          <h4> {language === "it" ? "Chi SIamo" : "Who we are"}</h4>
          <ul>
            <li>Noemi D'asta</li>
            <li>Fiamma Ferrone</li>
            <li>Giancosimo Calabrese</li>
            <li>Andrea Cosma Marchetti</li>
            <li>Stanislao Tufo</li>
          </ul>
        </div>
        <div className="footerColumns">
          <h4>{language === "it" ? "Contatti" : "Contacts"}</h4>
          <ul>
            <li>
              <a href="tel:+">3274984886</a>
            </li>
            <li>
              <a href="/email">infoexample@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="footerColumns">
          <h4>{language === "it" ? "Link inerenti" : "Inerhent link"}</h4>
          <ul>
            <Link to="/about">
              <li>
                <a href="/about">
                  {language === "it" ? "Chi SIamo" : "Who we are"}
                </a>
              </li>
            </Link>
            <li>
              <a href="/services">
                {language === "it" ? "Servizi" : "Services"}
              </a>
            </li>
            <li>
              <a href="/privacy">
                {language === "it"
                  ? "Politica della privacy"
                  : "Privicy Policy"}
              </a>
            </li>
          </ul>
        </div>

        <div className="footerColumns">
          <h4>{language === "it" ? "Strumenti" : "Who we are"}</h4>
          <ul>
            <li>React</li>
            <li>GitHub</li>
            <li>discord</li>
          </ul>
        </div>
      </div>
      <div className="socialIcons">
        <a href="http://"></a>
        <a href="http://"></a>
      </div>
      <div className="copyright">
        <p>
          &copy;<a href="/link">EventiveTravels</a>, all rights deserved.
        </p>
      </div>
    </footer>
  );
}

/** @format */

import { Animation } from "../components/Animation";
import { WoodBar } from "../components/WoodBar";
import { Link } from "react-router-dom";
import "./Services.css";
import { useLanguage } from "../context/LanguageContext";

export function Services() {
  const { language } = useLanguage();

  return (
    <>
      <div className="totalServicesDiv">
        <Animation textIt={"Servizi"} textEng={"Services"} />
        <div className="containerServices">
          <h3 className="servicesFooter">
            {language === "it" ? "Assistenza clienti" : "Customer support"}
          </h3>
          <p className="servicesP">
            {language === "it"
              ? "Supporto dedicato 24/7."
              : "Dedicated support 24/7."}
          </p>
          <h3 className="servicesFooter">
            {language === "it"
              ? "Progettazione e sviluppo"
              : "Design and development"}
          </h3>
          <p className="servicesP">
            {language === "it"
              ? "Realizzazione di progetti innovativi."
              : "Creation of innovative projects."}
          </p>
          <h3 className="servicesFooter">
            {language === "it"
              ? "Manutenzione e supporto."
              : "Maintenance and support."}
          </h3>
          <p className="servicesP">
            {language === "it"
              ? "Servizi di aggiornamento e monitoraggio continuo."
              : ""}
          </p>
          {/* <hr className="servHr"/> */}
          <p className="servicesEnd">
            &copy;
            <Link to="/">EventiveTravels</Link>
            {language === "it"
              ? ", tutti i diritti riservati."
              : ", all rights deserved."}
          </p>
        </div>
      </div>
    </>
  );
}

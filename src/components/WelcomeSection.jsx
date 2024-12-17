import React from "react";
import "./WelcomeSection.css";
import { useLanguage } from "../context/LanguageContext";

const WelcomeSection = () => {
  const { language } = useLanguage();
  return (
    <div className="container-welcome-section">
      <h1 className="welcome-section">
        {language === "it" ? "Come" : "How does"}
        <span className="style-text-welcome">
          {language === "it" ? "funziona" : "it works"}
        </span>
      </h1>

      <div className="steps">
        <div className="step">
          <img
            className="img-welcome"
            src="https://cdn-icons-gif.flaticon.com/11321/11321466.gif"
            height={"100px"}
            width={"100px"}
          />
          <h2>{language === "it" ? "Inizia" : "Start here"}</h2>
          <p>
            {language === "it"
              ? "Scegli tra le nostre opzioni"
              : "Choose from our options"}
          </p>
        </div>

        <div className="step">
          <img
            className="img-welcome"
            src="https://cdn-icons-gif.flaticon.com/17270/17270750.gif"
            height={"100px"}
            width={"100px"}
          />
          <h2>{language === "it" ? "Prenota e viaggia" : "Book and travel"}</h2>
          <p>
            {language === "it"
              ? "Prenota il tuo viaggio in pochi click"
              : "Book your trip in just a few clicks."}
          </p>
        </div>

        <div className="step">
          <img
            className="img-welcome"
            src="    https://cdn-icons-gif.flaticon.com/17093/17093521.gif"
            height={"100px"}
            width={"100px"}
          />

          <h2>{language === "it" ? "Recensisci" : "Review"}</h2>
          <p>
            {language === "it"
              ? "Lascia una recensione del tuo viaggio."
              : "Leave a review of your trip."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

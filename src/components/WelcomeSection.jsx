import React from "react";
import "./WelcomeSection.css";

const WelcomeSection = () => {
  return (
    <div className="container-welcome-section">
      <h1 className="welcome-section">
        Come <span className="style-text-welcome">funziona</span>
      </h1>

      <div className="steps">
        <div className="step">
          <img
            className="img-welcome"
            src="https://cdn-icons-png.flaticon.com/128/14941/14941334.png"
            height={"100px"}
            width={"100px"}
          />
          <h2>Inizia</h2>
          <p>Scegli tra le nostre opzioni.</p>
        </div>

        <div className="step">
          <img
            className="img-welcome"
            src="https://cdn-icons-gif.flaticon.com/17270/17270750.gif"
            height={"100px"}
            width={"100px"}
          />
          <h2>Prenota e viaggia</h2>
          <p>Prenota il tuo viaggio in pochi clic.</p>
        </div>

        <div className="step">
          <img
            className="img-welcome"
            src="https://cdn-icons-png.flaticon.com/128/17093/17093521.png"
            height={"100px"}
            width={"100px"}
          />

          <h2>Recensisci</h2>
          <p>Lascia una recensione del tuo viaggio.</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

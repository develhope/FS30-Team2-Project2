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
            src="https://cdn-icons-gif.flaticon.com/16121/16121586.gif"
            height={"100px"}
            width={"100px"}
          />
          <h2>Inizia</h2>
          <p>Scegli l'evento o la destinazione e le date.</p>
        </div>

        <div className="step">
          <img
            className="img-welcome"
            src="https://images-ext-1.discordapp.net/external/ziw5t-8SQJleJYVlqHbi4QzJC-lQD5-QiiJpfAaKE2E/https/cdn-icons-gif.flaticon.com/14659/14659787.gif?width=662&height=66"
            height={"100px"}
            width={"100px"}
          />

          <h2>Personalizza</h2>
          <p>Personalizza il tuo viaggio secondo le tue preferenze.</p>
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
      </div>
    </div>
  );
};

export default WelcomeSection;

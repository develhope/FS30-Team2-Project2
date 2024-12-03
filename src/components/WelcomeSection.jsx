import React from "react";

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <h1>Come funziona</h1>

      <div className="steps">
        <div className="step">
          <h2>Iniziare</h2>
          <p>Scegliete l'evento o la destinazione e le date.</p>
        </div>

        <div className="step">
          <h2>Personalizzalo</h2>
          <p>Personalizza il tuo viaggio secondo le tue preferenze.</p>
        </div>

        <div className="step">
          <h2>Prenotare e viaggiare</h2>
          <p>Prenota il tuo viaggio in pochi clic.</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

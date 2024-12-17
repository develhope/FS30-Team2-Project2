import React, { useState } from "react";
import "./PopUpPayment.css";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { stripePromise } from "./CheckoutForm";

export default function PopUpPayment({ onClick }) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surname: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isFormCompleted, setIsFormCompleted] = useState(false); // Stato per verificare se il form è completato

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Le password non corrispondono!");
    } else {
      alert("Registrazione completata con successo!");
      setIsFormCompleted(true); // Imposta il form come completato
    }
  };

  function handlePaymentClosed() {
    onClick();
  }

  return (
    <div className="overlay">
      <div className="pop-up-payment">
        <button onClick={handlePaymentClosed} className="button-pop-up-payment">
          X
        </button>

        {!isFormCompleted ? (
          <>
            <h2 className="h2PopUp">Registrazione</h2>
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-group">
                <label className="labelPopUp" htmlFor="email">
                  Email
                </label>
                <input
                  className="inputPopUp"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <h3 className="hrPopUp">Indirizzo di fatturazione</h3>

              <div className="form-group">
                <label className="labelPopUp" htmlFor="name">
                  Nome
                </label>
                <input
                  className="inputPopUp"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="labelPopUp" htmlFor="surname">
                  Cognome
                </label>
                <input
                  className="inputPopUp"
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="labelPopUp" htmlFor="phoneNumber">
                  Numero di Telefono
                </label>
                <input
                  className="inputPopUp"
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="labelPopUp" htmlFor="password">
                  Password
                </label>
                <input
                  className="inputPopUp"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="labelPopUp" htmlFor="confirmPassword">
                  Conferma Password
                </label>
                <input
                  className="inputPopUp"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Registrati
              </button>
            </form>
          </>
        ) : (
          <Elements stripe={stripePromise}>
            <div className="payment-container">
              <CheckoutForm />
            </div>
          </Elements>
        )}
      </div>
    </div>
  );
}

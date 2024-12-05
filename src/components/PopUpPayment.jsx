import React from "react";
import "./PopUpPayment.css";
import { useState } from "react";

export default function PopUpPayment({ onClick }) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surname: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

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

      onClick();
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
        <h2 classname="h2PopUp">Registrazione</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label classname="labelPopUp" htmlFor="email">
              Email
            </label>
            <input
              classname="inputPopUp"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <h3 classname="h2PopUp">Indirizzo di fatturazione</h3>

          <div className="form-group">
            <label classname="labelPopUp" htmlFor="name">
              Nome
            </label>
            <input
              classname="inputPopUp"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label classname="labelPopUp" htmlFor="surname">
              Cognome
            </label>
            <input
              classname="inputPopUp"
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label classname="labelPopUp" htmlFor="phoneNumber">
              Numero di Telefono
            </label>
            <input
              classname="inputPopUp"
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label classname="labelPopUp" htmlFor="password">
              Password
            </label>
            <input
              classname="inputPopUp"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label classname="labelPopUp" htmlFor="confirmPassword">
              Conferma Password
            </label>
            <input
              classname="inputPopUp"
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
      </div>
    </div>
  );
}

import React from "react";
import "./PopUpPayment.css";

export default function PopUpPayment({ onClick }) {
  function handlePaymentClosed() {
    onClick();
  }

  return (
    <div className="overlay">
      <div className="pop-up-payment">
        <button onClick={handlePaymentClosed} className="button-pop-up-payment">
          X
        </button>
      </div>
    </div>
  );
}

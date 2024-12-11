import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export const stripePromise = loadStripe(
  `pk_test_51QSex9DX4tDUeVBetbpKngWAdReEttPURIpy2FIP8PWz639UkW8UqKhT8o2EikH42Ovtxr4pQpXGcxXMSlYAKJRz00ecfEyInu`
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);
    try {
      const paymentInfo = {
        amount: 5000,
        currency: "usd",
      };
      const response = await fetch(`apiEndpoint`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(paymentInfo),
      });

      if (!response.ok) {
        throw new Error("Failed to create payment");
      }

      const data = response.json();
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setMessage(`Payment failed: ${result.error.message}`);
      } else if (result.paymentIntent.status === "succeeded") {
        setMessage(`Payment succeeded`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || isLoading}>
          {isLoading ? "Processing" : " Pay n amount"}
        </button>
        {message && <span>{message}</span>}
      </form>
    </div>
  );
};

export default CheckoutForm;

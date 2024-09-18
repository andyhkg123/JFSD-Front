import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [userId, setUserId] = useState(null);
  const [event_id, setEventId] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setPaymentSuccess(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.REACT_APP_FAPI_URL}/success=true`,
      },
    });

    // Handle errors or set PaymentSuccess based on the result

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
      setPaymentSuccess(false);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  ///add user to backend///
  useEffect(() => {
    const event_id = new URLSearchParams(window.location.search).get(
      "event_id"
    );
    setEventId(event_id);
    const userId = getUserIdFromCookie();
    setUserId(userId);
  }, []);

  useEffect(() => {
    if (paymentSuccess && userId && event_id) {
      axios

        .post(`${process.env.REACT_APP_API_URL}/addUserToEvent`, {
          userId,
          event_id,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [paymentSuccess, userId, event_id]);

  function getUserIdFromCookie() {
    const cookies = document.cookie.split(";");
    let userId = null;

    cookies.forEach((cookie) => {
      const [name, value] = cookie.trim().split("=");
      if (name === "user_id") {
        userId = value;
      }
    });

    return userId;
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}

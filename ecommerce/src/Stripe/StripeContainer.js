import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LTAHTLtx8jRCHvd5rtsu5UrUrEE1C1Ysvl9oU6nFg1qSlTfuKUQgy5xj7z36akThniL930LjknYFmJTlp3uRBCR00kVtLcsxe";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
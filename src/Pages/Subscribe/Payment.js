import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from '../../apiService/axios';

const stripePromise = loadStripe('pk_test_51MvGRULyPagBwcPn8cfry3uU9i9gGASSwjiGcTz10T4zUROjvtfdtuyx4NGQYwWX8gRqbAjFV3E9rW4B44WsP161006YllnuPM');
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
        console.log(paymentMethod.id);
    if (error) {
      // Handle payment error
      setError(error.message);
    } else {
     
     axios.post("/subscriptions/create/",{stripe_token:paymentMethod.id, plan_id:134})
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
          console.log(err.message);
      })
      setPaymentSuccess(true);
    }
  };

  useEffect(() => {
    // Load Stripe.js asynchronously
    stripePromise.then((stripe) => {
      // Stripe.js has loaded
    });
  }, []);

  return (
    <div>
      {paymentSuccess ? (
        <div>
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="card-element">
              Credit or debit card
            </label>
            <div id="card-element">
              <CardElement options={{ /* customize styling */ }} />
            </div>
            {error && <div className="error">{error}</div>}
          </div>
          <button type="submit">Pay</button>
        </form>
      )}
    </div>
  );
};

const Pays = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default Pays;

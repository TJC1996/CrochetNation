import React, { useState } from 'react';
import { Typography, Button, Divider } from '@mui/material';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const PaymentForm = ({ checkoutToken, nextStep, shippingData, onCaptureCheckout, setOrderLoading }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    if (!shippingData) {
      console.error('Shipping data is not available');
      return;
    }

    setOrderLoading(true);
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: `${shippingData.firstName} ${shippingData.lastName}`,
        email: shippingData.email,
        address:{
          line1: shippingData.streetAddress,
          city: shippingData.city,
          postal_code: shippingData.zipcode,
          state: shippingData.shippingSubdivision,
          country: shippingData.shippingCountry,
        },
      },
    });


    

    if (error) {
      console.log('[error]', error);
      setLoading(false);
    } else {
    
      const orderData = {
        line_items: checkoutToken.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: `${shippingData.firstName} ${shippingData.lastName}`,
          street: shippingData.streetAddress,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zipcode,
          country: shippingData.shippingCountry,
        },
        billing: { 
          name: `${shippingData.firstName2} ${shippingData.lastName2}`, 
          street: shippingData.streetAddress2, 
          town_city: shippingData.city2, 
          county_state: shippingData.state, 
          postal_zip_code: shippingData.zipcode2, 
          country: shippingData.shippingCountry 
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'gway_QlW0RpxRGMJXwn',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      
      
      console.log('orderData', orderData);
      nextStep();
      try {
        await onCaptureCheckout(checkoutToken.id, orderData);
      } catch (error) {
        console.error('Failed to capture checkout:', error);
      } finally {
        setOrderLoading(false);
        
      }


    }
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <CardElement />
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button type="submit" variant="contained" disabled={!stripe || loading} color="primary">
                Pay {checkoutToken.subtotal.formatted_with_symbol}
              </Button>
            </div>
          </form>
        )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;




import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ shippingData, cart, backStep, onCaptureCheckout, nextStep }) => {
    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

        if (error) {
            console.log('[error]', error);
        } else {
            const orderData = {
                customer: [{ firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email }],
                shipping: [{ street: shippingData.address1, postal_zip_code: shippingData.zip, country: shippingData.country, city: shippingData.city }],
                payment: [{
                    gateway: 'stripe',
                    stripe: [{
                        payment_method_id: paymentMethod.id,
                    }],
                }],
            };

            onCaptureCheckout(orderData);

            nextStep();
        }
    };

    return (
        <>
            <Review cart={cart}/>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>결제 방법</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br /> <br />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant="outlined" onClick={backStep}>이전</Button>
                                <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                                    결제
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    );
}

export default PaymentForm;

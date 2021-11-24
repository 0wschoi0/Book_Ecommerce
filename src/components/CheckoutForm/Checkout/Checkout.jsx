import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { dbService } from '../../../fbase'

import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['배달 주소', '결제 세부사항'];

const Checkout = ({ cart, order, onCaptureCheckout, handleEmptyCart }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const classes = useStyles();

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        console.log(data);
        nextStep();
    }

    const Confirmation = () => (
        <div>
            결제가 완료되었습니다.
        </div>
    );


    const Form = () => activeStep === 0
        ? <AddressForm next={next} />
        : <PaymentForm shippingData={shippingData} cart={cart} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} />

    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">결제</Typography>
                    <Stepper activeStep={activeStep} className={classes.Stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? handleEmptyCart() && <Confirmation /> : <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout

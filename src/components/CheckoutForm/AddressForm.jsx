import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import FormInput from './CustomTextField';

const AddressForm = ({ next }) => {
    const methods = useForm();
    const {register} = useForm();

    const onSubmitting = async (data) => {
        next({...data});
    }

    return (
        <>
            <Typography variant="h6" gutterBottom>배달 주소</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmitting)}>
                    <Grid container spacing={3}>
                        <FormInput name='firstName' label='성' />
                        <FormInput name='lastName' label='이름' />
                        <FormInput name='address1' label='주소' />
                        <FormInput name='email' label='이메일' />
                        <FormInput name='city' label='도시' />
                        <FormInput name='country' label='국가' />
                        <FormInput name='zip' label='우편번호' />
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} to="/cart" variant="outlined">장바구니</Button>
                        <Button type="submit" variant="contained" color="primary">다음</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
}

export default AddressForm

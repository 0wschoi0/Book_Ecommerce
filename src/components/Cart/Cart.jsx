import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">장바구니가 비어있습니다.
            <Link to="/" className={classes.link}> 물건 담으러 가기!</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>

            <div className={classes.cardTotal}>
                <div className={classes.cardTotal_1}>
                <Typography variant="h4" fontSize='13px' textTransform='uppercase'>TOTAL PRICE { cart.subtotal.formatted_with_symbol}</Typography>
                </div> 
                    <div className={classes.cardTotal_2}>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="#527578" onClick={handleEmptyCart}>장바구니 비우기</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="#47423f">결제하기</Button>
                    </div>
            </div>

        </>
    );
    
    if(!cart.line_items) return 'Loading... ';

    return (
        <Container>
          <div className={classes.toolbar} />
          <Typography className={classes.title} variant="h3" gutterBottom>장바구니</Typography>
          { !cart.line_items.length ? EmptyCart() : FilledCart() }
        </Container>
      );
};

export default Cart;

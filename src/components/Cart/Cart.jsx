import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { CreditCard, RemoveShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();
    var total = 0;

    const EmptyCart = () => (
        <Typography variant="subtitle1">장바구니가 비어있습니다.
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" component={Link} to="/">물건 담으러 가기!</Button>
        </div>
        </Typography>

    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3} className={classes.bg}>
                {cart.map((item) => (
                    <Grid item xs={10} sm={5} md={3} lg={2} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">총 합계 : {cart.map(item=>{total += item.totalP})}₩{total}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" variant="outlined" color="secondary" startIcon={<RemoveShoppingCart />} onClick={handleEmptyCart}>장바구니 비우기</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" variant="outlined" color="primary">결제하기</Button>

                    </div>
            </div>
        </>
    );

    return (
        <Container>
          <div className={classes.toolbar} />
          <Typography className={classes.title} variant="h3" gutterBottom align="center">장바구니</Typography>
          { cart.length === 0 ? EmptyCart() : FilledCart() }
        </Container>
      );
};

export default Cart;

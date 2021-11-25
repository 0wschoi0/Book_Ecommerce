import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import { Delete, Add, Remove } from '@material-ui/icons'

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia alt={item.name} image={item.url} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <IconButton aria-label="Remove" size="large" onClick={() => { item.quantity === 1 ? onRemoveFromCart(item.id) : onUpdateCartQty(item.id, -item.price, -1)}}>
                        <Remove />
                    </IconButton>
                    <Typography>{item.quantity}</Typography>
                    <IconButton aria-label="Add" size="large" onClick={() => onUpdateCartQty(item.id, item.price, +1)}>
                        <Add />
                    </IconButton>
                </div>
                <div className={classes.buttons}>
                    <IconButton arial-label="Delete" color="error" size="medium" onClick={() => onRemoveFromCart(item.id)}>
                        <Delete />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    )
}

export default CartItem;

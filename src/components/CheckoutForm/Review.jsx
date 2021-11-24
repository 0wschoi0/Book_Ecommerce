import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

let total;

const Review = ({ cart }) => (
  <>
    <Typography variant="h6" gutterBottom>주문 요약</Typography>
    <List disablePadding>
      {cart.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.id}>
          <ListItemText primary={product.name} secondary={`수량: ${product.quantity}`} />
          <Typography variant="body2">{product.price * product.quantity}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="합계" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {total=0, cart.map(item=>{total += item.totalP})}₩{total}
        </Typography>
      </ListItem>
    </List>
  </>
);

export default Review;

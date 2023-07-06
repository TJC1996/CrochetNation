
import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import {
    StyledCardActions,
  } from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Review from '../CheckoutForm/Review'; // Update the path to your Review component file



const Cart = ({ cart, handleRemoveFromCart, emptyCart, handleUpdateCartQuantity }) => {
  const [loading, setLoading] = useState(false);  
  const isEmpty = !cart?.line_items?.length;

  const EmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart yet. 
      <Link to='/'> Start adding some</Link>!
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id} textAlign="center">
            <CartItem item={item} handleUpdateCartQuantity={handleUpdateCartQuantity} handleRemoveFromCart={handleRemoveFromCart}/>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', margin: '20px', padding: '20px' }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h5'>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
          </Grid>
          <Grid item>
            <StyledCardActions>
              <Button size='large' type='button' variant='contained' color='secondary' onClick={emptyCart}>Empty Cart</Button>
            </StyledCardActions>
          </Grid>
          <Grid item>
            <StyledCardActions>
              <Button component={Link} to="/checkout" size='large' type='button' variant='contained' color='primary'>Checkout</Button>
            </StyledCardActions>
          </Grid>
        </Grid>
      </Box>
    </>
  );
  if (loading) {
    return <div>Loading...</div>;
  } else {
  return (
    <Container>
      <div sx={{ minHeight: '60px', backgroundColor: '#f5f5f5' }} />
      <Typography sx={{ color: '#3f51b5', textAlign: 'center', padding: '20px 0' }} variant="h4" gutterbottom="true">
        Your shopping cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
  }
};

export default Cart;



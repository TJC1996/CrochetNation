import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import {
  StyledCardActions,
} from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

const Cart = ({ cart, handleRemoveFromCart, emptyCart, handleUpdateCartQuantity }) => {
  const [loading, setLoading] = useState(false);
  const isEmpty = !cart?.line_items?.length;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // if location.state exists and location.state.clearError is true, then clear error
    if (location.state && location.state.clearError) {
     
      navigate(location.pathname, { state: { ...location.state, clearError: false }, replace: true });
    }
  }, [location, navigate]);

  const EmptyCart = () => {
    const animation = useSpring({
      from: { transform: 'translate3d(0,40px,0)', opacity: 0 },
      to: { transform: 'translate3d(0,0,0)', opacity: 1 },
      config: { duration: 1000 },
      delay: 300,
      loop: { reverse: true },
    });

    return (
      <Box
        sx={{
          height: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="subtitle1">
          You have no items in your shopping cart yet.
        </Typography>
        <animated.div style={animation}>
          <Typography variant="subtitle1">
            <Link to='/shop'> Start adding some</Link>!
          </Typography>
        </animated.div>
      </Box>
    );
  };


  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id} textAlign="center">
            <CartItem item={item} handleUpdateCartQuantity={handleUpdateCartQuantity} handleRemoveFromCart={handleRemoveFromCart} />
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
        <Typography sx={{ color: '#3f51b5', textAlign: 'center', padding: '20px 0', marginTop: '30px', marginBottom: '0px' }} variant="h4" gutterBottom>
          Your shopping cart
        </Typography>
        {isEmpty ? <EmptyCart /> : <FilledCart />}
      </Container>

    );
  }
};

export default Cart;



import React from 'react'
import { Typography, Button, Box } from '@mui/material';
import {
    StyledCard,
    StyledCardMedia,
    StyledCardActions,
    StyledCardContent,
  } from './styles';

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQuantity }) => {
  return (
    <StyledCard>
              <StyledCardMedia image={item.image.url} alt={item.name} />
              <StyledCardContent>
                <Typography variant="h5" color="textPrimary">{item.name}</Typography>
                <Typography variant="h5" color="textSecondary">{item.line_total.formatted_with_symbol}</Typography>
              </StyledCardContent>
              <StyledCardActions>
                <Box display="flex"  justifyContent="center" alignItems="center">
                <Button size="small" color="primary" onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button size="small" color="primary" onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)}>+</Button>
                </Box>
                <Button variant='contained' type='button' color='secondary' onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
              </StyledCardActions>
            </StyledCard>
  )
}

export default CartItem

import React from 'react'

import { Card, CardMedia, CardContent, CardActions, makeStyles, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import {
  StyledCard,
  StyledCardMedia,
  StyledCardActions,
  StyledCardContent,
} from './styles';

// ...
const Product = ({ product, onAddToCart }) => {
  // use your styled components as regular components
  
  return (
    <StyledCard>
      <StyledCardMedia image={product.image.url} style={{ height: 0, paddingTop: '56.25%', backgroundSize: 'cover' }}/>
      <StyledCardContent>
        <Typography variant="h5">
        {product.name}
        </Typography>
        <Typography variant="h6">
        {product.price.formatted_with_symbol}
        </Typography>
      </StyledCardContent>
      <StyledCardContent>
      <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant="body2"/>
      </StyledCardContent>
      
      <StyledCardActions>
        <IconButton sx={{color: '#0077B6'}} onClick={() => onAddToCart(product.id, 1)} >
          <AddShoppingCart />
        </IconButton>
      </StyledCardActions>
    </StyledCard>
  );
};

export default Product;


// onClick={() => onAddToCart(product.id)}

// onClick={() => onAddToCart(product.id, 1)}
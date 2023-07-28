import React, { useState } from 'react';
import { CardActionArea, IconButton, Typography, Dialog } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import {
  StyledCard,
  StyledCardMedia,
  StyledCardActions,
  StyledCardContent,
} from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // required styles

const Product = ({ product, onAddToCart }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <CardActionArea component="div">
      <StyledCard>
        <StyledCardMedia image={product.image.url} style={{ height: '300px', paddingTop: '56.25%', backgroundSize: 'cover' }} onClick={handleClickOpen}/>
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <img src={product.image.url} alt={product.name} style={{width: "100%", height: "auto"}}/>
        </Dialog>
        
      

        <StyledCardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="h6">{product.price.formatted_with_symbol}</Typography>
        </StyledCardContent>
        <StyledCardContent>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
          />
        </StyledCardContent>

        <StyledCardActions disableSpacing>
          <IconButton sx={{ color: '#FFA500' }} onClick={() => onAddToCart(product.id, 1)}>
            <AddShoppingCart />
          </IconButton>
        </StyledCardActions>
      </StyledCard>
    </CardActionArea>
  );
};

export default Product;

import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Product from './Products/Product/Product';
import CircularProgress from '@mui/material/CircularProgress';
import image from '../assets/yarnballs.png';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const BouncyTypography = styled(Typography)`
  animation: ${bounce} 1s linear infinite;
`;

const Products = ({ products, onAddToCart }) => {
    // Add loading state
    const [isLoading, setIsLoading] = useState(true);

    // Simulate fetching data
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
<main>
  <Box sx={{ margin: '30px auto', marginBottom: '30px', maxWidth: '1200px', padding: '16px' }}>
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      color: '#FFFFFF',  // White color for text visibility on image
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',  // Text shadow for better visibility
      marginBottom: '20px',
      justifyContent: 'center', // This line added to center text vertically
      padding: '20px',  // Padding to prevent text touching the edges
      backgroundImage: `url('${image}')`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '20px',  // Rounded corners
      height: '300px'  // Adjust this value to set the height as per your needs
    }}>
      <Typography variant="h2" align="center">
        Welcome to Our Store!
      </Typography>
      <Typography variant="h5" align="center" sx={{color: '#FFFFFF',}}>
        Providing you with the best handmade products since 2023.
      </Typography>
    </Box>
    <BouncyTypography variant="h3" align="center" sx={{ 
        fontFamily: "'Times New Roman', serif",
        color: '#0077B6',
        textDecoration: 'underline 2px solid #FFA500',
        paddingBottom: '5px',
        paddingTop: '5px',
     }} gutterBottom>
        Shop
    </BouncyTypography>
    <Typography style={{marginTop: '10px', marginBottom: '20px' }} variant="h6" align="center" gutterBottom>
        Perfect for Festivals, Raves, and Everyday Wear! Everything is made with love!
    </Typography>
    <Grid container justify="center" spacing={4}>
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Box height="100%">
                <Product product={product} onAddToCart={onAddToCart}/>
                </Box>
            </Grid>
        ))}
    </Grid>
  </Box>
</main>
    )
}

export default Products;


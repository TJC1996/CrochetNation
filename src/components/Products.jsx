import React from 'react';
import  Grid  from '@mui/material/Grid';
import Box from '@mui/system/Box';


import Product from './Products/Product/Product'


const Products = ({ products, onAddToCart }) => {
    return(
    <main justify="center">
        <Box sx={{ margin: '0 auto', maxWidth: '1200px', padding: '16px' }}>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>
            ))}
        </Grid>
        </Box>
    </main>
    )
}

export default Products;
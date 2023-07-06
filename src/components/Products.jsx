// import React from 'react';
// import  Grid  from '@mui/material/Grid';
// import Box from '@mui/system/Box';
// import Typography from '@mui/material/Typography';


// import Product from './Products/Product/Product'


// const Products = ({ products, onAddToCart }) => {
//     return(
//     <main justify="center">
//         <Box sx={{ margin: '0 auto', marginBottom: '20px', maxWidth: '1200px', padding: '16px' }}>
//         <Typography variant="h4" align="center" sx={{ color: '#0077B6' }} gutterBottom>
//             <u>Shop</u>
//         </Typography>
//         <Typography style={{marginTop: '10px'}} variant="h6" align="center" gutterBottom >
//         <p>Please find our new products listed below. Everything is handmade with love!</p>
//         </Typography>
//         <Grid container justify="center" spacing={4}>
//             {products.map((product) => (
//                 <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
//                     <Product product={product} onAddToCart={onAddToCart}/>
//                 </Grid>
//             ))}
//         </Grid>
//         </Box>
//     </main>
//     )
// }

// export default Products;

import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Product from './Products/Product/Product'

const textStyle = {
  textDecoration: 'underline',
  color: '#0077B6',
};

const Products = ({ products, onAddToCart }) => {
    return(
    <main>
        <Box sx={{ margin: '0 auto', marginBottom: '20px', maxWidth: '1200px', padding: '16px' }}>
        <Typography variant="h4" align="center" sx={textStyle} gutterBottom>
            Shop
        </Typography>
        <Typography style={{marginTop: '10px'}} variant="h6" align="center" gutterBottom>
            Please find our new products listed below. Everything is handmade with love!
        </Typography>
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

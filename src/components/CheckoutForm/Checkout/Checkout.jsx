import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import Review from '../Review';
import { useState, useEffect } from 'react';
import { commerce } from '../../../lib/commerce'
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Crochet Nation
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Shipping address', 'Review your order', 'Payment Details'];



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Checkout({ cart, order, onCaptureCheckout, error }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    const generateToken = async () => {
        if (cart && cart.id) {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                console.log('Checkout token:', token);
                setCheckoutToken(token);
            } catch (error) {
                console.error("There was an error generating the token:", error.response);
            }
        }
    }

    generateToken();
}, [cart]); // Depend on `cart` to ensure useEffect runs when `cart` changes

const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

const next = (data) => {
  setShippingData(data);
  nextStep();

}

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm checkoutToken={checkoutToken} next={next} />;
      case 1:
        return <Review checkoutToken={checkoutToken} />;
      case 2:
        return <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  
  return (
      
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        {/* <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar> */}
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep === 0 && (
                  <Button
                  component={Link}
                  to="/cart"
                  sx={{ mt: 3, ml: 1 }}
                  variant="contained"
                >
                  Back to Cart
                </Button>
                )}
                
                { (activeStep === 0 || activeStep === 1) && 
    <Button
        type="submit"
        variant="contained"
        onClick={handleNext}
        sx={{ mt: 3, ml: 1 }}
    >
        Next
    </Button>
}

              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}


// import React, { useState } from 'react';
// import { Step, StepLabel, Typography } from '@mui/material/';

// import { StyledToolbar, StyledLayout, StyledPaper, StyledStepper } from './styles';

// const steps = ['Shipping Address', 'Payment Details'];

// const Checkout = () => {
//   const [activeStep, setActiveStep] = useState(0);  
//   return (
//     <>
//       <StyledToolbar />
//       <StyledLayout>
//         <StyledPaper>
//             <Typography variant="h4" align="center">Checkout</Typography>
//             <StyledStepper>
//                 {steps.map((step) => (
//                  <Step key={step}>
//                         <StepLabel>{step}</StepLabel>
//                  </Step>
//                 ))}
//             </StyledStepper>
//         </StyledPaper>
//       </StyledLayout>
//     </>
//   )
// };

// export default Checkout;



// import React, { useState } from 'react'
// import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material/';

// // import useStyles from './styles';

// import { StyledToolbar, StyledLayout, StyledPaper, StyledStepper } from './styles';


// const steps = ['Shipping Address', 'Payment Details'];

// const Checkout = () => {
//   const [activeStep, setActiveStep] = useState(0);  
//   return (
//     <>
//       <StyledToolbar/>
//       <StyledLayout>
//         <StyledPaper>
//             <Typography variant="h4" align="center">Checkout</Typography>
//             <StyledStepper>
//                 {steps.map((step) => (
//                  <Step key={step}>
//                         <StepLabel>{step}</StepLabel>
//                  </Step>
                
//                 ))}
                       

//             </StyledStepper>
//         </StyledPaper>
//       </StyledLayout>
//     </>
//   )
// };

// export default Checkout;

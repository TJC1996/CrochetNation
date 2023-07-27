// import React from 'react';
// import ReactDOM from 'react-dom';



// ReactDOM.render(<App />, document.getElementById('root'));

import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);


const theme = createTheme({
  // you can add your theme configuration here
});

root.render(
    <ThemeProvider theme={theme}>
      <App tab="home" />
    </ThemeProvider>
  );
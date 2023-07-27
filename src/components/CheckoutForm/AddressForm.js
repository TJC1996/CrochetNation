

// //Chat GPT Help

// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { FormProvider, useForm } from 'react-hook-form';
// import FormInput from './CustomTextField';
// import { InputLabel, MenuItem, Select, Button } from '@mui/material';
// import { useState, useEffect } from 'react';


// import { commerce } from '../../lib/commerce';

// export default function AddressForm({ checkoutToken, next }) {


//   const [shippingCountries, setShippingCountries] = useState([]);
//   const [shippingCountry, setShippingCountry] = useState('');
//   const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
//   const [shippingSubdivision, setShippingSubdivision] = useState('');
//   const [shippingOptions, setShippingOptions] = useState([]);
//   const [shippingOption, setShippingOption] = useState('');
//   const methods = useForm({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       streetAddress: "",
//       city: "",
//       zipcode: "",
//       firstName2: "",
//       lastName2: "",
//       streetAddress2: "",
//       city2: "",
//       state: "",
//       zipcode2: ""
//     },
//   });

//   const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))
//   const subdivisions = Object.entries(shippingSubdivision).map(([code, name]) => ({ id: code, label: name }))
//   const options = shippingOptions.map((s0) => ({ id: s0.id, label: `${s0.description} - (${s0.price.formatted_with_symbol})` }))
//   const validEmail = (value) => {
//     return /\S+@\S+\.\S+/.test(value);
//   };

//   const validZip = (value) => {
//     return /^\d{5,}$/.test(value);
//   };
  

//   const fetchShippingCountries = (checkoutTokenId) => {
//     if (!checkoutTokenId) {
//       return;
//     }

//     commerce.services.localeListShippingCountries(checkoutTokenId)
//       .then(({ countries }) => {
//         console.log(`Countries`, countries);
//         setShippingCountries(countries);
//         setShippingCountry(Object.keys(countries)[0]);
//       })
//       .catch((error) => console.log(error));
//   }

//   const fetchSubdivisions = async (countryCode) => {
//     const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)

//     setShippingSubdivisions(subdivisions)
//     setShippingSubdivision(Object.keys(subdivisions)[0]);
//   }


//   const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
//     const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })
//     console.log(`Options:`, options);
//     setShippingOptions(options);
//     setShippingOption(options[0].id);

//   }

//   useEffect(() => {
//     if (checkoutToken) {
//       fetchShippingCountries(checkoutToken.id)
//     }
//   }, [checkoutToken]);


//   useEffect(() => {
//     if (shippingCountry) fetchSubdivisions(shippingCountry);
//   }, [shippingCountry]);


//   useEffect(() => {
//     if (shippingSubdivision && checkoutToken) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
//   }, [shippingSubdivision, checkoutToken, shippingCountry]);

//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Shipping address
//       </Typography>
//       <FormProvider {...methods}>
//         <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
//           <Grid container spacing={3}>
//             <FormInput required name='firstName' label='First Name' />
//             <FormInput required name='lastName' label='Last Name' />
//             <FormInput required name='email' label='Email' pattern={validEmail} helperText={'Must be a valid email address'}/>
//             <FormInput required name='streetAddress' label='Street Address' />
//             <FormInput required name='city' label='City' />
//             {/* <FormInput required name='state' label='State' /> */}
//             <FormInput required name='zipcode' label='Zipcode' pattern={validZip} helperText={'Must be at least 5 digits'} />
//             <Grid item xs={12} sm={6}>
//               <InputLabel>Shipping Country</InputLabel>
//               <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
//                 {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
//                   <MenuItem key={item.id} value={item.id}>
//                     {item.label}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <InputLabel>State</InputLabel>
//               <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
//                 {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
//                   <MenuItem key={item.id} value={item.id}>
//                     {item.label}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <InputLabel>Shipping Options</InputLabel>
//               <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
//                 {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
//                   <MenuItem key={item.id} value={item.id}>
//                     {item.label}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </Grid>

//             <Grid item xs={12}>
//             <Typography variant="h6" gutterBottom>
//               Billing address
//             </Typography>
//             <Grid container spacing={3}>
//               {/* Billing Address Inputs */}
//               <FormInput required name='firstName2' label='First Name' />
//               <FormInput required name='lastName2' label='Last Name' />
//               <FormInput required name='streetAddress2' label='Street Address' />
//               <FormInput required name='city2' label='City' />
//               <FormInput required name='state' label='State' /> 
//               <FormInput required name='zipcode2' label='Zipcode' pattern={validZip} helperText={'Must be at least 5 digits'} />
//             </Grid>
//           </Grid>

//             <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
//             <Button
//               type="submit"
//               variant="contained"
//               sx={{ mt: 3, ml: 1, width: 'auto', height: 'auto' }}
//             >
//             Next
//           </Button>
//           </Grid>
//           </Grid>

//         </form>


//       </FormProvider>
//     </React.Fragment>
//   );
// }


import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from './CustomTextField';
import { InputLabel, MenuItem, Select, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { commerce } from '../../lib/commerce';

export default function AddressForm({ checkoutToken, next }) {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      streetAddress: "",
      city: "",
      zipcode: "",
      firstName2: "",
      lastName2: "",
      streetAddress2: "",
      city2: "",
      state: "",
      zipcode2: ""
    },
  });

  const fetchShippingCountries = (checkoutTokenId) => {
    if (!checkoutTokenId) {
      return;
    }

    commerce.services.localeListShippingCountries(checkoutTokenId)
      .then(({ countries }) => {
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
      })
      .catch((error) => console.log(error));
  }

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)

    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  }

  const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })
    setShippingOptions(options);
    setShippingOption(options[0].id);
  }

  useEffect(() => {
    if (checkoutToken) {
      fetchShippingCountries(checkoutToken.id)
    }
  }, [checkoutToken]);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision && checkoutToken) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision, checkoutToken, shippingCountry]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
          <Grid container spacing={3}>
            <FormInput required name='firstName' label='First Name' />
            <FormInput required name='lastName' label='Last Name' />
            <FormInput required name='email' label='Email' pattern={/\S+@\S+\.\S+/} helperText={'Must be a valid email address'} />
            <FormInput required name='streetAddress' label='Street Address' />
            <FormInput required name='city' label='City' />
            <FormInput required name='zipcode' label='Zipcode' pattern={/^\d{5,}$/} helperText={'Must be at least 5 digits'} />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>State</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Billing address
              </Typography>
              <Grid container spacing={3}>
                <FormInput required name='firstName2' label='First Name' />
                <FormInput required name='lastName2' label='Last Name' />
                <FormInput required name='streetAddress2' label='Street Address' />
                <FormInput required name='city2' label='City' />
                <FormInput required name='state' label='State' />
                <FormInput required name='zipcode2' label='Zipcode' pattern={/^\d{5,}$/} helperText={'Must be at least 5 digits'} />
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button type="submit" variant="contained" sx={{ mt: 3, ml: 1, width: 'auto', height: 'auto' }}>Next</Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </React.Fragment>
  );
}

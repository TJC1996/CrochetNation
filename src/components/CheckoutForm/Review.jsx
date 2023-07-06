import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material/';

const Review = ({ checkoutToken }) => {

  // Calculate the total cost including shipping
  const totalCost = parseFloat(checkoutToken.total.formatted) + parseFloat(checkoutToken.shipping_methods[0].price.formatted);

  // Calculate the total tax for each product
  const totalTax = checkoutToken.line_items.reduce((total, product) => {
    const productTotal = parseFloat(product.line_total.formatted);
    return total + (productTotal * 0.0725);
  }, 0);

  const formattedTotalCost = (totalCost + totalTax).toFixed(2);
  const formattedTotalTax = totalTax.toFixed(2);

  return (
    <>
      <Typography variant="h6" gutterBottom>Order summary</Typography>
      <List disablePadding>
        {checkoutToken.line_items.map((product) => (
          <ListItem style={{ padding: '10px 0' }} key={product.name}>
            <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
            <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: '10px 0' }}>
          <ListItemText primary="Shipping" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {checkoutToken.shipping_methods[0].price.formatted_with_symbol}
          </Typography>
        </ListItem>
        <ListItem style={{ padding: '10px 0' }}>
          <ListItemText primary="Sales Tax" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            ${formattedTotalTax}
          </Typography>
        </ListItem>
        <ListItem style={{ padding: '10px 0' }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            ${formattedTotalCost}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;


// import React from 'react';
// import { Typography, List, ListItem, ListItemText } from '@mui/material/';

// const Review = ({ checkoutToken }) => {

//   // Calculate the total cost including shipping
//   const totalCost = parseFloat(checkoutToken.total.formatted) + parseFloat(checkoutToken.shipping_methods[0].price.formatted);
//   const formattedTotalCost = totalCost.toFixed(2);

//   return (
//     <>
//       <Typography variant="h6" gutterBottom>Order summary</Typography>
//       <List disablePadding>
//         {checkoutToken.line_items.map((product) => (
//           <ListItem style={{ padding: '10px 0' }} key={product.name}>
//             <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
//             <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
//           </ListItem>
//         ))}
//         <ListItem style={{ padding: '10px 0' }}>
//           <ListItemText primary="Shipping" />
//           <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
//             {checkoutToken.shipping_methods[0].price.formatted_with_symbol}
//           </Typography>
//         </ListItem>
//         <ListItem style={{ padding: '10px 0' }}>
//           <ListItemText primary="Total" />
//           <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
//             ${formattedTotalCost}
//           </Typography>
//         </ListItem>
//       </List>
//     </>
//   );
// };

// export default Review;



// import React from 'react';
// import { Typography, List, ListItem, ListItemText } from '@mui/material/';

// const Review = ({ checkoutToken }) => (
//   <>
//     <Typography variant="h6" gutterBottom>Order summary</Typography>
//     <List disablePadding>
//       {checkoutToken.line_items.map((product) => (
//         <ListItem style={{ padding: '10px 0' }} key={product.name}>
//           <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
//           <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
//         </ListItem>
//       ))}
//       <ListItem style={{ padding: '10px 0' }}>
//         <ListItemText primary="Shipping" />
//         <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
//           {checkoutToken.shipping_methods[0].price.formatted_with_symbol}
//         </Typography>
//       </ListItem>
//       <ListItem style={{ padding: '10px 0' }}>
//         <ListItemText primary="Total" />
//         <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
//           {checkoutToken.total.formatted} + {checkoutToken.shipping_methods[0].price.formatted}
//         </Typography>
//       </ListItem>
//     </List>
//   </>
// );

// export default Review;


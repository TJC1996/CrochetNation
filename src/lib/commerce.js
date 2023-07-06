import Commerce  from '@chec/commerce.js';

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

// export const commerce = new Commerce('pk_test_5261935200252f0f91722223cc78937acf81038cabd04', true);  // For sandbox testing
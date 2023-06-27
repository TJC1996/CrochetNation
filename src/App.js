import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// require('dotenv').config();

import { Products, Navbar, Cart, Checkout} from './components'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState({});

  if (cart && cart.line_items) {
    console.log(cart);
  }

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }



  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }


  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    // console.log(item);

    setCart(item);

    if (item && item.line_items) {
      item.line_items.forEach(item => {
        console.log(item);
      });
    }
  }

  const handleUpdateCartQuantity = async (productId, quantity) => {

    await commerce.cart.update(productId, { quantity });
    const updatedCart = await commerce.cart.retrieve();
    setCart(updatedCart);
    // console.log(`Updating product ${productId} to quantity ${quantity}`);
    // const { cart } = await commerce.cart.update(productId, { quantity });
    // console.log("Updated Cart:", cart);
    // setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {

    await commerce.cart.update(productId);
    const updatedCart = await commerce.cart.remove(productId);
    setCart(updatedCart);

    // const { cart } = await commerce.cart.remove(productId);
    // console.log("Cart after remove:", cart);
    // setCart(cart);
  }

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }

 const refreshCart = async () => {
      const newCart = await commerce.cart.refresh();

      setCart(newCart);
 }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try{
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message)

    }
  }


  useEffect(() => {
    fetchProducts();
    fetchCart();

    // emptyCart();
  }, [])



  return (
    <Router>
      <div>
        <Navbar totalItems={cart?.total_items} />
        <Routes>

          <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route exact path="/cart" element={
            <Cart
              cart={cart}
              emptyCart={emptyCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateCartQuantity={handleUpdateCartQuantity}

            />} />
          <Route exact path="/checkout" element={
          <Checkout 
          cart={cart}
          order={order}
          onCaptureCheckout={handleCaptureCheckout}
          error={errorMessage}
          />
          } />
        </Routes>
      </div>

    </Router>
  )
}

export default App



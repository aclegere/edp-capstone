// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Men from "./components/Men";
import Women from "./components/Women";
import Unisex from "./components/Unisex";
import Accessories from "./components/Accessories";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from './components/Checkout';
import Search from './components/Search';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <Router>
      <Navbar cartItemCount={cartItems.length} />
      <Search />
      <Routes>
        <Route path="/" exact element={<Home addToCart={addToCart} />} />
        <Route path="/men" element={<Men addToCart={addToCart} />} />
        <Route path="/women" element={<Women addToCart={addToCart} />} />
        <Route path="/unisex" element={<Unisex addToCart={addToCart} />} />
        <Route
          path="/accessories"
          element={<Accessories addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
        <Route path = '/checkout' element = {<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

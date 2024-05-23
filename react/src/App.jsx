import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Men from "./components/Men";
import Women from "./components/Women";
import Unisex from "./components/Unisex";
import Accessories from "./components/Accessories";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products`);

        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setData(json_response); // assign JSON response to the data variable.
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Navbar cartItemCount={cartItems.length} onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home data={data} addToCart={addToCart} searchQuery={searchQuery} />
          }
        />
        <Route
          path="/men"
          element={
            <Men data={data} addToCart={addToCart} searchQuery={searchQuery} />
          }
        />
        <Route
          path="/women"
          element={
            <Women
              data={data}
              addToCart={addToCart}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          path="/unisex"
          element={
            <Unisex
              data={data}
              addToCart={addToCart}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          path="/accessories"
          element={
            <Accessories
              data={data}
              addToCart={addToCart}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

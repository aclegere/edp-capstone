import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./Home";
import "./App.css";
import {BroswerRouter, Routes, Route} from 'react-router-dom;'
import LoginSignUp from "./components/LoginSignUp";

function App() {
  return (
    <>
      <BroswerRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/unisex" element={<ShopCategory category="unisex" />} />
          <Route path="/accessories" element={<ShopCategory category="accessories" />}/>
          <Route path = "item" element = {<Product />}>
            <Route path = ':itemId' element = {<Product />} />
          </Route>
          <Route path = '/cart' element = {<Cart />} />
          <Route path = '/login' element = {<LoginSignUp />} />
        </Routes>
      </BroswerRouter>
    </>
  );
}

export default App;

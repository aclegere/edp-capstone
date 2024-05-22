import React, {useState} from 'react'
import './Navbar.css'
import cart_icon from '../assets/cart_icon.png'
import { Link } from "react-router-dom";


const Navbar  = () => {


    return (
      <div className="navbar">
        <div className="nav-logo">
          <p>never21</p>
        </div>
        <ul className="nav-menu">
          <li>
            Home
          </li>
          <li>
            Men
          </li>
          <li
          >
            Women
          </li>
          <li
          >
           Unisex
          </li>
          <li
          >
          Accessories
          </li>
        </ul>
        <div className="nav-login-cart">
          
            <button>Login</button>
          
          
            <img src={cart_icon} alt="cart" />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    );
}

export default Navbar;
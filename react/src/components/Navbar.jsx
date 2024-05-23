import React from "react";
import "./Navbar.css";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ cartItemCount, onSearch }) => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>never21</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <Link to="/unisex">Unisex</Link>
        </li>
        <li>
          <Link to="/accessories">Accessories</Link>
        </li>
      </ul>
      <button>Login</button>
      <Link to="/cart" className="nav-login-cart">
        <img src={cart_icon} alt="cart" />
        <div className="nav-cart-count">{cartItemCount}</div>
      </Link>
      <Search onSearch={onSearch} />
    </div>
  );
};

export default Navbar;

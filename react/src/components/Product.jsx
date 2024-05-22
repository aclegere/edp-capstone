// Product.jsx
import React from "react";
import {useCart} from 'react-use-cart';
import './Product.css'

const Product = ({
  addToCart,
  id,
  name,
  price,
  description,
  category,
  color,
}) => {
  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      description,
      category,
      color,
    });
  };

  return (
    <div
      className="card"
      style={{ flex: "1", minWidth: "300px", maxWidth: "45%" }}
    >
      <div className="card-body">
        <h5 className="card-title">Product Details</h5>
        <div className="card-text">{name} </div>
        <div className="card-text">Description: {description}</div>
        <div className="card-text">Color: {color}</div>
        <div className="card-text">Price: ${price}</div>
      </div>
      <div className="card-body">
        <h5 className="card-title">Category</h5>
        <div className="card-text">{category}</div>
        <div>
          <button className="btn btn-success" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

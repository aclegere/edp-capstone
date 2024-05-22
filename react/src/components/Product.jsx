import React from "react";
import {useCart} from 'react-use-cart';

const Product = (props) => {
  const { addItem } = useCart();


  return (
    <div
      className="card"
      style={{ flex: "1", minWidth: "300px", maxWidth: "45%" }}
    >
      <div className="card-body">
        <h5 className="card-title">Product Details</h5>
        <div className="card-text">{props.name} </div>
        <div className="card-text">Description: {props.description}</div>
        <div className="card-text">Color: {props.color}</div>
        <div className="card-text">Price: ${props.price}</div>
      </div>
      <div className="card-body">
        <h5 className="card-title">Category</h5>
        <div className="card-text">{props.category}</div>
        <button className="btn btn-success" onClick={() => addItem(props.item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

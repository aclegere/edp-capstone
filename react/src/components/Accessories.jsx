import React from "react";
import item_data from "../assets/clothing_products.json";

import Product from "./Product.jsx";
import "./CStyling.css";


const Accessories = ({ addToCart, searchQuery }) => {
  // If there's no search query, render all menItems
  const accessoryItems = searchQuery
    ? item_data.filter(
        (item) =>
          item.category === "Accessories" &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : item_data.filter((item) => item.category === "Accessories");

  return (
    <div className="accessories">
      <h1>Accessories</h1>
      <hr />
      <div className="accessory-items">
        {accessoryItems.map((item, i) => {
          return (
            <Product
              key={i}
              id={item.itemId}
              addToCart={addToCart}
              name={item.name}
              price={item.price}
              description={item.description}
              category={item.category}
              color={item.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Accessories;

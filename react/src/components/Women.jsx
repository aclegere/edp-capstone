import React from "react";
import item_data from "../assets/clothing_products.json";

import Product from "./Product.jsx";
import "./CStyling.css";


const Women = ({ addToCart, searchQuery }) => {
  // If there's no search query, render all menItems
  const womenItems = searchQuery
    ? item_data.filter(
        (item) =>
          item.category === "Women's Clothing" &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : item_data.filter((item) => item.category === "Women's Clothing");

  return (
    <div className="women">
      <h1>Women's Clothing</h1>
      <hr />
      <div className="women-items">
        {womenItems.map((item, i) => {
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

export default Women;

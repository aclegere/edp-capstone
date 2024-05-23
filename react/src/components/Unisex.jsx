import React from "react";
import item_data from "../assets/clothing_products.json";

import Product from "./Product.jsx";

const Unisex = ({ addToCart, searchQuery }) => {
  // If there's no search query, render all Items
  const unisexItems = searchQuery
    ? item_data.filter(
        (item) =>
          item.category === "Unisex Clothing" &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : item_data.filter((item) => item.category === "Unisex Clothing");

  return (
    <div className="unisex">
      <h1>Unisex Clothing</h1>
      <hr />
      <div className="unisex-items">
        {unisexItems.map((item, i) => {
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

export default Unisex;

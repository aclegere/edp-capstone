import React from "react";
import item_data from "../assets/clothing_products.json";
import Product from "./Product.jsx";

const Men = ({ addToCart, searchQuery }) => {
  // If there's no search query, render all menItems
  const menItems = searchQuery
    ? item_data.filter(
        (item) =>
          item.category === "Men's Clothing" &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : item_data.filter((item) => item.category === "Men's Clothing");

  return (
    <div className="men">
      <h1>Men's Clothing</h1>
      <hr />
      <div className="men-items">
        {menItems.map((item, i) => {
          return (
            <Product
              key={i}
              addToCart={addToCart}
              id={item.itemId}
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

export default Men;

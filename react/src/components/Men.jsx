import React from "react";
import Product from "./Product.jsx";
import "./CStyling.css";

const Men = ({ addToCart, searchQuery, data }) => {
  // If there's no search query, render all menItems
  const menItems = searchQuery
    ? data.filter(
        (item) =>
          item.category === "Men's Clothing" &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : data.filter((item) => item.category === "Men's Clothing");

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

import React from "react";
import Product from "./Product.jsx";
import "./CStyling.css";


const Unisex = ({ addToCart, searchQuery, data }) => {
  // If there's no search query, render all Items
  const unisexItems = searchQuery
    ? data.filter(
        (item) =>
          item.category === "Unisex Clothing" &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : data.filter((item) => item.category === "Unisex Clothing");

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

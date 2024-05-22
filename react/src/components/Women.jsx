import React from "react";
import item_data from "../assets/clothing_products.json";

import Product from "./Product.jsx";

const Women = ({ addToCart }) => {
  // Filter items with category "Men's Clothing"
  const womenItems = item_data.filter(
    (item) => item.category === "Women's Clothing"
  );

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

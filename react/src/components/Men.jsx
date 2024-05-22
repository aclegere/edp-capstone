import React from "react";
import item_data from "../assets/clothing_products.json";

import Product from "./Product.jsx";

const Men = () => {
  // Filter items with category "Men's Clothing"
  const menItems = item_data.filter(
    (item) => item.category === "Men's Clothing"
  );

  return (
    <div className="men">
      <h1>Men's Clothing</h1>
      <hr />
      <div className="men-items">
        {menItems.map((item, i) => {
          return (
            <Product
              key={i}
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

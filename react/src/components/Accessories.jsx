import React from "react";
import item_data from "../assets/clothing_products.json";

import Product from "./Product.jsx";

const Accessories = () => {
  // Filter items with category "Men's Clothing"
  const accessoryItems = item_data.filter(
    (item) => item.category === "Accessories"
  );

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

import React from "react";
import item_data from "../assets/clothing_products.json";

import Product from "./Product.jsx";

const Featured = () => {
  return (
    <div className="featured">
      <h1>Featured Products</h1>
      <hr />
      <div className="featured-item">
        {item_data.map((item, i) => {
          return (
            <Product
              key={i}
              id={item.id}
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

export default Featured;

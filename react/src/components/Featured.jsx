import React from "react";
import item_data from "../assets/clothing_products.json";

import Product from "./Product.jsx";

const Featured = () => {
  const featuredItems = item_data.slice(0, 3);

  return (
    <div className="featured">
      <h1>Featured Products</h1>
      <hr />
      <div className="featured-item">
        {featuredItems.map((item, i) => {
          return (
            <Product
              key={i}
              id={item.id}
              item ={item}
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

import React from "react";
import Featured from './components/Featured'

function Home({ addToCart }) {
  return (
    <>
      <Featured addToCart={addToCart} />
    </>
  );
}

export default Home;

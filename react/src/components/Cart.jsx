import React from "react";
import { useNavigate } from "react-router-dom";
import './Cart.css'

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  
  const navigate = useNavigate()

  const goToNewPage=()=>{
    navigate("/checkout");
  }

  
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}- ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <div><button onClick={goToNewPage}>Proceed to Checkout</button></div>
    </div>
  );
};

export default Cart;

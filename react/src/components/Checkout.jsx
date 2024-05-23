import React, { useState } from "react";
import "./Checkout.css";

const Checkout = ({ cartItems, setCartItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    cardName: "",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkoutData = {
      customerInfo: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
      },
      paymentInfo: {
        cardName: formData.cardName,
        cardNumber: formData.cardNumber,
        expirationDate: formData.expirationDate,
        securityCode: formData.securityCode,
      },
      cartItems: cartItems, // cart items which is passed in from app.jsx
    };
    console.log(checkoutData); // checkout data?

    // sending data to server
    try {
      // Make a POST request to the API
      const response = await fetch(`http://localhost:3000/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkoutData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error posting data", error);
    }

    // set success message, will time it out later
    setSuccessMessage("Your order has been successfully submitted!");

    // clear form data after posting
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      cardName: "",
      cardNumber: "",
      expirationDate: "",
      securityCode: "",
    });

    // cart items back to 0
    setCartItems([]);

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000); // Clear success message after 3 seconds
  };

  return (
    <>
      <div className="form-box">
        <h5 className="form-step">Shipping Information</h5>
        <form>
          <div className="field1">
            <label>Customer Info</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Phone 000-000-0000"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Shipping Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>

      <div className="payment-box">
        <form onSubmit={handleSubmit}>
          <div className="field1">
            <label>Payment Info</label>
            <input
              type="text"
              placeholder="Name on Card"
              name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Card Number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Expiration Date (MM/YY)"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Security Code"
              name="securityCode"
              value={formData.securityCode}
              onChange={handleInputChange}
            />
          </div>
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </form>
        {successMessage && <div className="success">{successMessage}</div>}
      </div>
    </>
  );
};

export default Checkout;

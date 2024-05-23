import React from 'react';
import './Checkout.css';

const Checkout = () => {



    return (
      <>
        <div className="form-box">
          <h5 className="form-step">Shipping Information</h5>
          <form>
            <div className="field1">
              <label>customer info</label>
              <input placeholder="Name" />
              <input placeholder="Phone 000-000-0000" />
              <input placeholder="E-mail" />
              <textarea placeholder="Shipping Address" />
            </div>
          </form>
        </div>

        <div className="payment-box">
          <form>
            <div className="field1">
              <label>Payment Info</label>
              <input placeholder="Name on Card" />
              <input placeholder="Card Number" />
              <input placeholder="Expiration Date (MM/YY)"/>
              <input placeholder="Security Code" />
            </div>
          </form>
          <button className="submitBtn" type="submit">Submit</button>
        </div>
      </>
    );
}

export default Checkout;
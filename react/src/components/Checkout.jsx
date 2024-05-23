import React from 'react';
import './Checkout.css';

const Checkout = () => {
    return (
      <div className = 'form-box'>
        <h5 className ='form-step'>Shipping Information</h5>
        <form>
          <div className ="field1">
            <label>customer info</label>
            <input placeholder = 'Name' />
            <input placeholder='Phone 000-000-0000' />
            <input placeholder = 'E-mail' />
            <textarea placeholder='Shipping Address' />
          </div>

          <button type='submit' id='submitBtn' className='submitBtn'>submit</button>
        </form>

      </div>
      
    );
}

export default Checkout;
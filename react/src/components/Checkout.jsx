import React from 'react';

const Checkout = () => {
    return (
      <form> {/*onSubmit={handleSubmit} className="p-3"*/}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label>First Name</label>
              <input type="text" name="firstname" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label>Last Name</label>
              <input type="text" name="lastname" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label>Address Line 1</label>
              <input type="text" name="address1" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label>Address Line 2</label>
              <input type="text" name="address2" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label>City</label>
              <input type="text" name="city" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label>State</label>
              <input type="text" name="state" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label>Zip Code</label>
              <input type="text" name="zipcode" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label>Phone Number</label>
              <input type="text" name="phonenumber" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label>Email</label>
              <input type="email" name="email" className="form-control" />
            </div>
          </div>
          <button>Submit</button>
        </div>
      </form>
    );
}

export default Checkout;
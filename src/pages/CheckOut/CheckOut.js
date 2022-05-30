import React from "react";

const CheckOut = () => {
  return (
    <div className="login-form">
      <div className="container">
        <form>
          <h3>Please fill up this information</h3>
          <div className="form-content">
            <div className="custom-input">
              <input type="text" placeholder="Enter Your full Name" required />
            </div>
            <div className="custom-input">
              <input type="email" placeholder="Enter Email" required />
            </div>
            <div className="custom-input">
              <input
                type="text"
                placeholder="Enter Your Mobile Number"
                required
              />
            </div>
            <div className="custom-input">
              <input type="text" placeholder="Enter Your city" required />
            </div>
            <div className="custom-input">
              <input
                type="text"
                placeholder="Enter Your Home Address"
                required
              />
            </div>
            <div className="custom-input">
              <input type="submit" value="Order Place" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;

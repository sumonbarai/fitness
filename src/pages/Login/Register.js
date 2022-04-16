import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div className="container">
        <form>
          <h3>Please Register</h3>
          <div className="form-content">
            <div className="custom-input">
              <input type="email" placeholder="Enter Email" required />
            </div>
            <div className="custom-input">
              <input type="password" placeholder="Enter Password" required />
            </div>

            <div className="custom-input">
              <input type="submit" value="Sign Up" />
            </div>
            <div className="not-member">
              Not a member? <Link to="/login">Sing Up Now</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

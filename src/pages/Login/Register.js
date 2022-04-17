import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

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
              All Ready member? <Link to="/login">Login Now</Link>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

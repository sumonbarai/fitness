import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import SocialLogin from "./SocialLogin";
const Login = () => {
  return (
    <div className="login-form">
      <div className="container">
        <form>
          <h3>Please Login</h3>
          <div className="form-content">
            <div className="custom-input">
              <input type="email" placeholder="Enter Email" required />
            </div>
            <div className="custom-input">
              <input type="password" placeholder="Enter Password" required />
            </div>
            <div className="forget-password">
              <Link to="/forgetPassword">Forget password?</Link>
            </div>
            <div className="custom-input">
              <input type="submit" value="Login" />
            </div>
            <div className="not-member">
              Not a member? <Link to="/register">Sing Up Now</Link>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

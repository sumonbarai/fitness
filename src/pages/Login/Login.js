import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
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
            <div className="separator">
              <p>or</p>
            </div>
            <div className="continue-login">
              <button>
                <AiFillGoogleCircle></AiFillGoogleCircle>
              </button>
              <button>
                <FaGithub></FaGithub>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

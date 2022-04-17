import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import SocialLogin from "./SocialLogin";
const Login = () => {
  const [signInWithEmailAndPassword, userLogin, loading, LoginError] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user || userLogin) {
    navigate(from, { replace: true });
  }
  // login function
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="login-form">
      <div className="container">
        <form onSubmit={handleLogin}>
          <h3>Please Login</h3>
          <div className="form-content">
            <div className="custom-input">
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />
            </div>
            <div className="custom-input">
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />
            </div>
            <div className="forget-password">
              <Link to="/forgetPassword">Forget password?</Link>
            </div>
            <div className="custom-input">
              <input type="submit" value="Login" />
            </div>
            {LoginError && (
              <p className="text-uppercase text-danger">{LoginError.message}</p>
            )}
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

import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [updateProfile, updating] = useUpdateProfile(auth);

  if (loading || updating) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  // create an account
  const handleSignUp = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName });
    } else {
      setErrorMessage("your password does not match");
    }
  };
  // navigate to home page
  if (user) {
    navigate("/home");
    console.log(user);
  }

  return (
    <div className="login-form">
      <div className="container">
        <form onSubmit={handleSignUp}>
          <h3>Please Register</h3>
          <div className="form-content">
            <div className="custom-input">
              <input
                type="text"
                placeholder="Enter full name"
                required
                name="name"
              />
            </div>
            <div className="custom-input">
              <input
                type="email"
                placeholder="Enter Email"
                required
                name="email"
              />
            </div>
            <div className="custom-input">
              <input
                type="password"
                placeholder="Enter Password"
                required
                name="password"
              />
            </div>
            <div className="custom-input">
              <input
                type="password"
                placeholder="Enter confirm Password"
                required
                name="confirmPassword"
              />
            </div>
            {errorMessage && (
              <p className="text-danger text-capitalize">{errorMessage}</p>
            )}
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

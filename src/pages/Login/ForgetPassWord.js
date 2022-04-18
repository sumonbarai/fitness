import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import toast, { Toaster } from "react-hot-toast";

const ForgetPassWord = () => {
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  // sending state
  if (sending) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  // password reset email
  const handleForgetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    toast.success("Send Email for password reset", {
      duration: 4000,
    });
    event.target.email.value = "";
  };
  return (
    <div className="forget-password">
      <div className="login-form">
        <div className="container">
          <form onSubmit={handleForgetPassword}>
            <h3>Forget Your password</h3>
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
                <input type="submit" value="Login" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ForgetPassWord;

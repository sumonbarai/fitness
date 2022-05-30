import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import "./SocialLogin.css";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, , googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitHubUser, , githubError] =
    useSignInWithGithub(auth);

  return (
    <div className="social-login">
      <div className="separator">
        <p>or</p>
      </div>
      {googleError && <p className="text-danger">{googleError.message}</p>}
      {githubError && <p className="text-danger">{githubError.message}</p>}
      <div className="continue-login">
        <button onClick={() => signInWithGoogle()} type="button">
          <AiFillGoogleCircle></AiFillGoogleCircle>
        </button>
        <button onClick={() => signInWithGithub()} type="button">
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

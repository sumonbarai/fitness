import React from "react";
import "./Social.css";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Social = () => {
  return (
    <div className="social-area p-5">
      <div className="container">
        <h2 className="text-center fs-1 text-capitalize">
          follow us on social
        </h2>
        <p>
          As people are now using the internet to access different services and
          products, crafting a business website becomes a must! With such a
          marketing strategy, you will be able to reach more people and generate
          more leads.please follow on social media
        </p>
        <div className="social-link">
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
            <BsFacebook></BsFacebook>
          </a>

          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
            <BsYoutube></BsYoutube>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
            <BsInstagram></BsInstagram>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;

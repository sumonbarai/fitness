import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner-area">
      <div className="container">
        <h1>
          BE STRONGER THAN YOUR <br /> STRONGEST EXCUSE{" "}
        </h1>
        <button
          onClick={() => navigate("/login")}
          className="custom-btn"
          type="button"
        >
          Become a member
        </button>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../../image/permissions_gray_wash.svg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-items">
        <img src={notFound} alt="" />
        <h4>This content isn't available right now</h4>
        <p>
          When this happens, it's usually because the owner only shared it with
          a small group of people, changed who can see it or it's been deleted.
        </p>
        <Link to="/home" className="custom-btn">
          go to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

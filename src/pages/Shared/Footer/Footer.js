import React from "react";
import "./Footer.css";

const Footer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <footer className="footer-area">
      <div className="container">
        <p>&copy; copyright by fitness {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;

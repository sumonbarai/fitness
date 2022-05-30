import React from "react";
import pic from "../../image/Sumon pic-3.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-us">
      <img src={pic} alt="" />
      <h4>Name : Sumon Barai</h4>
      <p>
        Hi, I am sumon barai. I live in Khulna. i want to be a web developer at
        any cost. Every Web site has Two parts.one is front end part and another
        is backend part. First Goal is completed front part . so i want to be
        front end developer. Then i will looks some job in local or
        international market.
      </p>
    </div>
  );
};

export default About;

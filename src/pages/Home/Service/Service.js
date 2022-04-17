import React from "react";
import { Card } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  return (
    <div className="col-lg-3 col-md-6 col-12 g-4">
      <div className="single-service">
        <Card className="cards">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <button className="custom-btn">Check Out</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Service;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import logo from "../../../image/logo.png";

const Header = () => {
  return (
    <header className="header-area">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <CustomLink to="/home">
            <img className="custom-logo img-fluid" src={logo} alt="" />
          </CustomLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/blog">Blog</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/login">Login</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

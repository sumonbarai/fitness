import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import logo from "../../../image/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
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
              {user ? (
                <button onClick={logout} className="btn btn-link logOut">
                  Log Out
                </button>
              ) : (
                <CustomLink to="/login">Login</CustomLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

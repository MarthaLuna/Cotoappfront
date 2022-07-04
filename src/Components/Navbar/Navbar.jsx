import React from "react";
import Navbar2 from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <Navbar2 className="mb-2" sticky="top" id="Navbar-container">
      <Container className="d-flex justify-content-around">
        <Navbar2.Brand className="me-0" id="navbar-cotoApp-name" href="/">
          <img
            src={require("../../images/logo.jpg")}
            alt="logo"
            width="50px"
          ></img>
        </Navbar2.Brand>
      </Container>
    </Navbar2>
  );
};

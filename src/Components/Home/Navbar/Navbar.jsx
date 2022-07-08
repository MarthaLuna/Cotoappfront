import React from "react";
import Navbar2 from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Navbar.scss";
import useUser from "../../../Hooks/useUser";

export const Navbar = () => {
  const token = useUser();
  if (!token) {
    return (
      <Navbar2 className="mb-2" sticky="top" id="Navbar-container">
        <Container className="d-flex justify-content-around">
          <Navbar2.Brand className="me-0" id="navbar-cotoApp-name" href="/">
            <img
              src={require("../../../images/logo.jpg")}
              alt="logo"
              width="50px"
            ></img>
          </Navbar2.Brand>

          <a className="btn btn-outline-light" href="/auth/login">
            Ingresa
          </a>
        </Container>
      </Navbar2>
    );
  } else {
    return (
      <Navbar2 className="mb-2" sticky="top" id="Navbar-container">
        <Container className="d-flex justify-content-around">
          <Navbar2.Brand className="me-0" id="navbar-cotoApp-name" href="/">
            <img
              src={require("../../../images/logo.jpg")}
              alt="logo"
              width="50px"
            ></img>
          </Navbar2.Brand>
          <div id="coto-name">Coto Obsidiana</div>

          <a className="btn btn-outline-light" href="/auth/login">
            Ingresar
          </a>
        </Container>
      </Navbar2>
    );
  }
};

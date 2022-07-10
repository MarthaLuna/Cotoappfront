import React from "react";
import Navbar2 from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./NavResidentes.scss";
import { useNavigate } from "react-router-dom";

export const NavResidentes = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

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
        <div id="coto-name">
          <a id="link_nav" href="#">
            Pagos
          </a>
        </div>
        <div id="coto-name">
          <a id="link_nav" href="/dashboard/admin/reportes">
            Reportes
          </a>
        </div>
        <form onSubmit={handleSubmit} id="deleteForm">
          <button className="btn btn-outline-light" type="submit">
            Salir
          </button>
        </form>
      </Container>
    </Navbar2>
  );
};

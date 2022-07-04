import React from "react";
import Navbar2 from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./NavAdmin.scss";
import useUser from "../../Hooks/useUser";

export const NavAdmin = () => {
  const { token, isLoggedAdminIn } = useUser();

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
          <a id="link_nav" href="/dashboard/admin/residentes">
            Residentes
          </a>
        </div>
        <div id="coto-name">
          <div class="dropdown">
            <a
              class=" dropdown-toggle"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pagos
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button class="dropdown-item" type="button">
                  Configurar
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Control
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div id="coto-name">
          <a id="link_nav" href="#">
            Gastos
          </a>
        </div>
        <div id="coto-name">
          <a id="link_nav" href="/dashboard/admin/reportes">
            Reportes
          </a>
        </div>

        <a className="btn btn-outline-light" href="">
          Salir
        </a>
      </Container>
    </Navbar2>
  );
};

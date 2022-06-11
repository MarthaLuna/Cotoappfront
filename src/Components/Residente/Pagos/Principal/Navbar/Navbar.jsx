import React from "react";
import Navbar2 from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Navbar.scss";

export const Navbar = () => {
    return (
        <Navbar2 className="mb-2" sticky="top" id="Navbar-container">
            <Container className="d-flex justify-content-around">
                <Navbar2.Brand className="me-0" id="navbar-cotoApp-name" href="/"><img src={require("../../../../../images/logo.jpg")} alt="logo" width="50px"></img></Navbar2.Brand>
                <div className="d-flex w-50 ms-2">
                    <div className="" id="Reporte-Pagos">Pagos</div>
                    <div className="ms-4" id="Reporte-Gastos">Reportes</div>
                </div>
                <button type="button" className="btn btn-outline-light">
                    <span className="d-none d-md-flex" style={{ color: "white" }}>
                        Salir
                        <i className="ms-2 bi bi-door-open-fill"></i>
                    </span>
                    <i className="d-md-none bi bi-door-open-fill" style={{ color: "white" }}></i>
                </button>
            </Container>
        </Navbar2>
    );
}
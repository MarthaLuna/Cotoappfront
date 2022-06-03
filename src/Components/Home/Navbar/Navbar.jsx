import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Navbar.scss";

export const Navbar =()=>{
    return(
        <Navbar className="mb-2" sticky="top" id="Navbar-container">
            <Container className="d-flex justify-content-around">
                <Navbar.Brand className="me-0" id="navbar-cotoApp-name" href="#home">CotoApp</Navbar.Brand>
                <div id="coto-name">Coto Obsidiana</div>
                <button type="button" className="btn btn-outline-light">
                    Ingresa
                </button>
            </Container>
        </Navbar>
    );
}
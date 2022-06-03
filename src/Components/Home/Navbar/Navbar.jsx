import React from "react";
import Navbar2 from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Navbar.scss";

export const Navbar =()=>{
    return(
        <Navbar2 className="mb-2" sticky="top" id="Navbar-container">
            <Container className="d-flex justify-content-around">
                <Navbar2.Brand className="me-0" id="navbar-cotoApp-name" href="/"><img  src={require("../../../images/logo.jpg")} alt="logo" width="50px"></img></Navbar2.Brand>
                <div id="coto-name">Coto Obsidiana</div>
                <button type="button" className="btn btn-outline-light">
                    Ingresa
                </button>
            </Container>
        </Navbar2>
    );
}
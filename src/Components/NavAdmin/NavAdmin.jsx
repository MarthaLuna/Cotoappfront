import React from "react";
import Navbar2 from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./NavAdmin.scss";
import useUser from "../../Hooks/useUser";

export const NavAdmin = () => {
    console.log(useUser());
    const token = useUser();

    return (
        <Navbar2 className="mb-2" sticky="top" id="Navbar-container">
            <Container className="d-flex justify-content-around">
                <Navbar2.Brand className="me-0" id="navbar-cotoApp-name" href="/"><img src={require("../../images/logo.jpg")} alt="logo" width="50px"></img></Navbar2.Brand>
                <div id="coto-name"><a id="link_nav" href="/admin/residentes">Residentes</a></div>
                <div id="coto-name"><a id="link_nav" href="#">Pagos</a></div>
                <div id="coto-name"><a id="link_nav" href="#">Gastos</a></div>
                <div id="coto-name"><a id="link_nav" href="#">Reportes</a></div>

                <a className="btn btn-outline-light" href="/auth/login" >
                    Salir
                </a>


            </Container>
        </Navbar2>
    );


}
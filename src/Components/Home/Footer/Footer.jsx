import React from "react";
import "./Footer.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const Footer = () => {
  return (
    <Navbar
      fixed="bottom"
      expand="lg"
      variant="light"
      className="d-flex flex-column pt-0"
      id="footer-container"
    >
      <div className="w-100">
        <div className="p-0 m-0" id="footer-thin-white-line"></div>
        <div className="pb-1" id="footer-thin-grey-line"></div>
      </div>
      <Container className="d-flex align-items-center justify-content-center">
        <div className="pt-2 d-flex align-items-center justify-content-center">
          <small id="footer-smallText" className="m-0 me-1">
            Powered by
          </small>
          <Navbar.Brand className="m-0 p-0" href="#" id="footer-cotoApp-name">
            CotoApp
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
};

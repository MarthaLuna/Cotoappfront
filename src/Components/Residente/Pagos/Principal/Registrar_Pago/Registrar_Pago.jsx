import React from "react";
import "./Registrar_Pago.scss";
import {Tabla} from '../Tabla';
import Container from "react-bootstrap/Container";

export const Registrar_Pago = () => {
  return (
    <section className="Body d-flex align-items-center justify-content-center w-100 mt-4">
      <div className="Body-Container h-100 d-flex align-items-center justify-content-center w-100">
        <Container className="Body-Content d-flex flex-column align-items-center justify-content-start w-100 p-0 m-0">
          <div className="mb-4 w-100 w-md-100 d-flex justify-content-around justify-content-md-between" style={{color:"white"}}>
            <h2>
                Tus Pagos
            </h2>
            <button type="button" className="red-button">
              <span>
              Registrar Pago
              <i className="ms-2 bi bi-plus-circle"></i>
              </span>
            </button>
          </div>

          <Tabla/>

        </Container>
      </div>
    </section>
  );
};

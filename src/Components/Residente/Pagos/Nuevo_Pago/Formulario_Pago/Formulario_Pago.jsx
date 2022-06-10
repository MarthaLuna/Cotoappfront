import React from 'react';
import './Formulario_Pago.scss';

export const Formulario_Pago=()=>
{
    return(
        <section className="Body d-flex align-items-center justify-content-center w-100 mt-4">
        <div className="Body-Container h-100 d-flex align-items-center justify-content-center w-100">
          <Container className="Body-Content d-flex flex-column align-items-center justify-content-start w-100 p-0 m-0">
            <div
              id="Superior"
              className="d-flex w-100 justify-content-between mb-4"
              style={{ height: "80vh" }}
            >
              <div
                id="Formulario"
                className="mb-4 d-flex flex-column justify-content-between h-100 w-50"
              >
                <div id="Titulo-Reporte" style={{ color: "white" }}>
                  <h4>Registrar Pago</h4>
                </div>
                <div className="p-3" id="formulario-contenedor" style={{ background: "white" }}>
                  <div className="mb-2">
                    <button type="button" className="red-button2 me-3">
                      <span>
                        Adjuntar imagen
                        <i className="ms-2 bi bi-images"></i>
                      </span>
                    </button>
                  </div>
                  <div>
                    <form>
                      <div className="d-flex">
                        <div className="mb-3 me-2 w-50">
                          <label for="monto-pago" className="form-label">
                            Monto
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="monto-pago"
                          />
                        </div>
                        <div className="mb-3 w-50">
                          <label for="mes-pago" className="form-label">
                            Mes
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="mes-pago"
                          />
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="mb-3 me-2 w-50">
                          <label for="monto-pago" className="form-label">
                            Casa
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="monto-pago"
                          />
                        </div>
                        <div className="mb-3 w-50">
                          <label for="concepto-pago" className="form-label">
                            Concepto
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="concepto-pago"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label for="descripcion-pago" className="form-label">
                          Descripción (opcional)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="descripcion-pago"
                        />
                      </div>
                      <div className="d-flex justify-content-between">
                        <button type="submit" className="red-button2 me-3">
                          <span>
                            Enviar a aprobación
                            <i className="ms-2 bi bi-send-fill"></i>
                          </span>
                        </button>
                        <button type="reset" className="blue-button">
                          <span>
                            Limpiar
                            <i className="ms-2 bi bi-eraser-fill"></i>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div
                id="imagen-contenedor"
                className="w-50 ms-2 p-4 pt-1 d-flex flex-column align-items-center justify-content-around"
                style={{ color: "white" }}
              >
                <div className="w-100">
                  <h5>Información y recomendaciones para transferencia</h5>
                </div>
                <div className="w-100">
                  <div>
                    <p className="m-0">Banco:</p>
                    <p>Santander</p>
                  </div>
                  <div>
                    <p className="m-0">Número de cuenta:</p>
                    <p>0000-0000-0000-0000</p>
                  </div>
                  <div>
                  <p className="m-0">Cuenta CLABE:</p>
                    <p>0000-0000-0000-0000-XX</p>
                  </div>
                  <div>
                  <p className="m-0">Titular de la cuenta:</p>
                    <p>Perenganito Martínez</p>
                  </div>
                  <div>
                  <p className="m-0">Concepto de transferencia:</p>
                    <p>Cuota de mantenimiento</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="inferior"
              className="d-flex w-100 justify-content-end w-100"
              style={{ paddingBottom: "60px" }}
            >
              <button type="button" className="cancel-button">
                <span>
                  Cancelar
                  <i className="ms-2 bi bi-x-square-fill"></i>
                </span>
              </button>
            </div>
          </Container>
        </div>
      </section>
    );
}
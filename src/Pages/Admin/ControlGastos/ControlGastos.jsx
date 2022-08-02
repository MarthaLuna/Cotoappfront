import React, { useState, useEffect } from "react";
import { NavAdmin } from "../../../Components/NavAdmin";
import { Footer } from "../../../Components/Home/Footer";
import { useHttp } from "../../../Hooks/useHttp";
import { ServiceRequest } from "../Services/ServiceRequest";
import { GastosRowItem } from "./GastosRowItem";
import { Link } from "react-router-dom";
// import './ControlGastos.scss'

const ControlGastos = () => {
  const [controlGastos, setControlGastos] = useState([]);
  const { loading, request, error, data } = useHttp(ServiceRequest);
  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    if (Object.keys(data).length != 0) {
      setControlGastos(data.payload);
    }
  }, [data]);

  const handleSubmitmes = (e) => {
    e.preventDefault();
    const fecha = new Date();
    const mesActual = fecha.getMonth();

    console.log("mesActual", mesActual);
    //navigate(`/dashboard/admin/buscarPago?mes=${mesActual}`);
    setControlGastos((controlGastos) =>
      controlGastos.filter(
        (gasto) => new Date(gasto.fecha_gasto).getMonth() == mesActual
      )
    );
  };

  const handleSubmitanio = (e) => {
    e.preventDefault();
    const fecha = new Date();
    const añoActual = fecha.getFullYear();

    console.log("añoActual", añoActual);
    //navigate(`/dashboard/admin/buscarPagoAnio?anio=${añoActual}`);
    setControlGastos((controlGastos) =>
      controlGastos.filter(
        (gasto) => new Date(gasto.fecha_gasto).getFullYear() == añoActual
      )
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#747e7e",
      }}
    >
      <NavAdmin />
      <div className="w-100 d-none d-md-inline m-5">
        <div className="d-flex justify-content-between mx-5">
          <div className="d-flex justify-content-between">
            <form onSubmit={handleSubmitmes}>
              <button className="btn btn-outline-light btn-Pago">
                Mes Actual
              </button>
            </form>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <form onSubmit={handleSubmitanio}>
              <button className="btn btn-outline-light btn-Pago">
                Año Actual
              </button>
            </form>
          </div>

          <Link to="/dashboard/admin/GastosCrear">
            <button type="button" className="red-button ">
              Registrar Gasto
              <i className="ms-2 bi bi-plus-circle"></i>
            </button>
          </Link>
        </div>

        <div style={{ padding: "40px", margin: "5px 50px 5px 50px" }}>
          <table className="table bg-white rounded mx-3 table align-middle table-sm table-hover">
            <thead>
              <tr>
                <th scope="col">Concepto</th>
                <th scope="col">Monto</th>
                <th scope="col">Fecha de Pago</th>
                <th scope="col">Comprobante</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody className="table bg-white rounded mx-3 table align-middle table-sm table-hover">
              {controlGastos.map((controlGasto, _id) => {
                return (
                  <GastosRowItem
                    key={controlGasto._id}
                    setControlGastos={setControlGastos}
                    {...controlGasto}
                  />
                );
              })}
            </tbody>
          </table>
        </div>

        <div></div>

        <Footer />
      </div>
    </div>
  );
};

export default ControlGastos;

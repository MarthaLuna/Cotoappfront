import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./PagoHome.scss";

export const PagoHome = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleChange = ({ target }) => setName(target.value);

  const handleSubmitmes = (e) => {
    e.preventDefault();
    const fecha = new Date("Jul 12 2011");
    const mesActual = fecha.getMonth();

    console.log("mesActual", mesActual);
    navigate(`/dashboard/admin/buscarPago?mes=${mesActual}`);
  };

  const handleSubmitanio = (e) => {
    e.preventDefault();
    const fecha = new Date();
    const añoActual = fecha.getFullYear();

    console.log("añoActual", añoActual);
    navigate(`/dashboard/admin/buscarPagoAnio?anio=${añoActual}`);
  };

  return (
    <div className="PagoHomeConteiner">
      <div className="PagoHomeCont">
        <div className="PagoHomeContent d-flex justify-content-around">
          <div className="d-flex gap-6">
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
          <a
            className="btn btn-outline-light btn-Pago"
            href="/dashboard/admin/crearPagos"
          >
            Registrar Pago
          </a>
        </div>
      </div>
    </div>
  );
};

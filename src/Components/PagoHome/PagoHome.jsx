import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./PagoHome.scss";

export const PagoHome = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleChange = ({ target }) => setName(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const termUrl = encodeURIComponent(name.trim());
    navigate(`/dashboard/admin/buscarPago?name=${termUrl}`);
  };

  return (
    <div className="PagoHomeConteiner">
      <div className="PagoHomeCont">
        <div className="PagoHomeContent d-flex justify-content-around">
          <div className="d-flex gap-6">
            <form onSubmit={handleSubmit}>
              <button className="btn btn-outline-light btn-Pago">
                Mes Actual
              </button>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <button className="btn btn-outline-light btn-Pago">
                Año Actual
              </button>
            </form>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Ingresa nombre..."
                onChange={handleChange}
              ></input>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <button className="btn btn-outline-light btn-residente">
                Buscar
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

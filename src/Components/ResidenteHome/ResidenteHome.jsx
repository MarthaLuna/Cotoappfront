import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ResidenteHome.scss";
import useUser from "../../Hooks/useUser";

export const ResidenteHome = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleChange = ({ target }) => setName(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const termUrl = encodeURIComponent(name.trim());
    navigate(`/buscarResidente?name=${termUrl}`);
  };

  return (
    <div className="residenteHomeConteiner">
      <div className="residenteHomeCont">
        <div className="residenteHomeContent d-flex justify-content-around">
          <div className="d-flex gap-3">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Ingresa nombre residente"
                onChange={handleChange}
              ></input>
              <button className="btn btn-outline-light btn-residente">
                Buscar
              </button>
            </form>
          </div>
          <a
            className="btn btn-outline-light btn-residente"
            href="/crearResidente"
          >
            Crear Residente
          </a>
        </div>
      </div>
    </div>
  );
};

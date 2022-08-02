import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { NavAdmin } from "../../../Components/NavAdmin";

import { Footer } from "../../../Components/Home/Footer";
import { ResidenteBuscar } from "../../../Components/ResidenteBuscar";
import { useEffect, useState } from "react";
import { useHttp } from "../../../Hooks/useHttp";
import { residentesBuscarRequest } from "./Services/Buscar";
import "./Residentes.scss";

export const BuscarResidentesPage = () => {
  const location = useLocation();
  const { name } = queryString.parse(location.search);
  console.log(location.search);
  const [residentes, setResidentes] = useState([]);

  const { loading, request, error, data } = useHttp(residentesBuscarRequest, {
    nombre: name,
  });

  useEffect(() => {
    request();
  }, [name]);

  useEffect(() => {
    if (Object.keys(data).length != 0) {
      setResidentes(data.payload);
    }
  }, [data]);

  return (
    <div className="bckGP">
      <NavAdmin />
      <div className="resultTable">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>No. Casa</th>
              <th>Email</th>
              <th>Telefono</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {residentes.map((residente) => (
              <ResidenteBuscar
                key={residente._id}
                setResidentes={setResidentes}
                {...residente}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

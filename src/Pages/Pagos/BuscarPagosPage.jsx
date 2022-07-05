import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { NavAdmin } from "../../Components/NavAdmin";

import { Footer } from "../../Components/Home/Footer";
import { PagoBuscar } from "../../Components/PagoBuscar";
import { useEffect, useState } from "react";
import { useHttp } from "../../Hooks/useHttp";
import { pagosBuscarRequest } from "./Services/Buscar";
import "./Pagos.scss";

export const BuscarPagosPage = () => {
  const location = useLocation();
  const { name } = queryString.parse(location.search);
  console.log(location.search);
  const [pagos, setPagos] = useState([]);

  const { loading, request, error, data } = useHttp(pagosBuscarRequest, {
    nombre: name,
  });

  useEffect(() => {
    request();
  }, [name]);

  useEffect(() => {
    if (Object.keys(data).length != 0) {
      setPagos(data.payload);
    }
  }, [data]);

  return (
    <div id="Home-Container">
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
            {pagos.map((pago) => (
              <PagoBuscar key={pago._id} {...pago} />
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

import React, { useState, useEffect, useRef } from "react";
import { NavAdmin } from "../../../Components/NavAdmin";
import { Footer } from "../../../Components/Home/Footer";
import { useHttp } from "../../../Hooks/useHttp";
import { ServiceRequest } from "../Services/ServiceRequest";
import { ControlGastosTablePage } from "./ControlGastosTablePage";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import './ControlGastos.scss'
import axios from "axios";
import moment from "moment";
import 'moment/locale/es';
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
const urlApi = process.env.REACT_APP_URL_API;

const ControlGastos = ({ _id }) => {
  const [controlGastos, setControlGastos] = useState([]);
  const { loading, request, error, data } = useHttp(ServiceRequest);
  console.log(data);

  useEffect(() => {
    getGastos()
  }, []);
  /* data */
  function getGastos() {
    request();
  }

  useEffect(() => {
    if (Object.keys(data).length != 0) {
      setControlGastos(data.payload);
    }
  }, [data]);

  return (
    <div style={{
      backgroundColor: "#747e7e"
    }}>
      <NavAdmin />
      <div className="w-100 d-none d-md-inline m-5" >
        <div className="d-flex justify-content-between mx-5">
          <div className="d-flex justify-content-between">
            <button type="button" className="red-button">
              Año
            </button>
          </div>

          <Link to="/dashboard/admin/GastosCrear">
            <button type="button" className="red-button ">
              Registrar Gasto
              <i className="ms-2 bi bi-plus-circle"></i>
            </button>
          </Link>

        </div>


        <div style={{ padding: "40px", margin: "5px 50px 5px 50px" }}  >
          <table className="table bg-white rounded mx-3 table align-middle table-sm table-hover">
            <thead>
              <tr>
                <th scope="col">Concepto</th>
                <th scope="col">Monto</th>
                <th scope="col">Fecha de Pago</th>
                <th scope="col">Comprobante</th>
              </tr>

            </thead>
            <tbody className="table bg-white rounded mx-3 table align-middle table-sm table-hover" >
              {controlGastos.map((controlGasto, _id) => {
                return (
                  <ControlGastosTablePage key={controlGasto._id} {...controlGasto} />
                )
              })}
            </tbody>
          </table>
        </div>

        <div>

        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ControlGastos;
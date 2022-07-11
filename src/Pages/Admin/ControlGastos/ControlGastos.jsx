import React, { useState, useEffect, useReducer } from "react";
import { NavAdmin } from "../../../Components/NavAdmin";
import { Footer } from "../../../Components/Home/Footer";
import { useHttp } from "../../../Hooks/useHttp";
import { ServiceRequest } from "../Services/ServiceRequest";
import { ShowControlGastos } from "./ShowControlGastos";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import './ControlGastos.scss'

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


  return (
    <>
      <NavAdmin />
      <div className="w-100 d-none d-md-inline m-5" >
        <div className="d-flex justify-content-between mx-5">
          <div className="d-flex justify-content-between">
            <button type="button" className="red-button" >
              Mes Actual
            </button>
            <button type="button" className="red-button">
              Año Actual
            </button>
          </div>
          <Link to="/dashboard/admin/GastosCrear">
            <button type="button" className="red-button ">
              Registrar Gasto
              <i className="ms-2 bi bi-plus-circle"></i>
            </button>
          </Link>

        </div>


        <div style={{ padding: "40px" }} >
          {controlGastos.map((controlGasto) => (
            <ShowControlGastos key={controlGasto._id} {...controlGasto} /* onDelete={request} */ />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ControlGastos;

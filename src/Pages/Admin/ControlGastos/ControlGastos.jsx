import React, { useState, useEffect } from "react";
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
      <div className="w-100 d-none d-md-inline">
        <Link to="/dashboard/admin/GastosCrear">
          <button type="button" className="red-button ">
            Registrar Gasto
            <i className="ms-2 bi bi-plus-circle"></i>
          </button>
        </Link>
        <div className="d-flex justify-content-between p-2 ">
          <div className="d-flex justify-content-between">
            <button type="button" className="red-button">
              Mes Actual
            </button>
            <button type="button" className="red-button">
              Año Actual
            </button>
          </div>

          <div className="d-flex  ">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Mes del Año Actual
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Año
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div style={{ padding: "40px" }}>
          {controlGastos.map((controlGasto) => (
            <ShowControlGastos key={controlGasto._id} {...controlGasto} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ControlGastos;

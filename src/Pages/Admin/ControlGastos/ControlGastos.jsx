import React, { useState, useEffect } from "react";
import { NavAdmin } from "../../../Components/NavAdmin";
import { Footer } from "../../../Components/Home/Footer";
import { useHttp } from "../../../Hooks/useHttp";
import { ServiceRequest } from "../Services/ServiceRequest";
import { ShowControlGastos } from "./ShowControlGastos";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from '../../../Components/Modal/Modal'


const ControlGastos = () => {
  const [openModal, setOpenModal] = useState(false)
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

      <div id="Home-Container">
        <NavAdmin />
        <Link to="/admin/GastosCrear">
          <button type="button" className="red-button ">
            <span  >
              Registrar Gasto
              <i className="ms-2 bi bi-plus-circle"></i>
            </span>
          </button>
        </Link>
        <div className="d-flex justify-content-between p-2 ">
          <div className='d-flex justify-content-between'>
            <button type="button" className="red-button">Mes Actual
            </button>
            <button type="button" className="red-button">Año Actual
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

        <div className="text-secondary">
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

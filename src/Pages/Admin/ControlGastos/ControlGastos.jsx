import React, { useState, useEffect, useRef } from "react";
import { NavAdmin } from "../../../Components/NavAdmin";
import { Footer } from "../../../Components/Home/Footer";
import { useHttp } from "../../../Hooks/useHttp";
import { ServiceRequest } from "../Services/ServiceRequest";
import { ShowControlGastos } from "./ShowControlGastos";
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
  const [dialog, setDialog] = useState({
    children: "",
    isLoading: false,
  })
  const { loading, request, error, data } = useHttp(ServiceRequest);
  console.log(data);

  const navigate = useNavigate();

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
  const idGastosRef = useRef();
  const handleDialog = (children, isLoading) => {
    setDialog({
      children,
      isLoading
    })
  }


  const deleteItem = (_id) => {
    handleDialog("¿Está seguro de eliminar este gasto?", true);
    idGastosRef.current = _id;
  }
  const areUSureDelete = (choose) => {
    if (choose) {
      setControlGastos(
        fetch(`${urlApi}/gastos/${_id}`, { method: "DELETE", }).then((res) => { res.json().then((data) => { console.warn(data); getGastos() }) })
      )
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }

  }
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  /*  const handleClickOpen = () => {
     setOpen(true)
   } */
  /*   const filterByMonth = (byMonth) => {
      const result = controlGastos.filter(item => {
        return moment(item.createdAt).format("MMMM") === byMonth
      })
      setControlGastos(result)
    } */


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

            {controlGastos.map((controlGasto, _id) => {
              return (


                <tbody className="table bg-white rounded mx-3 table align-middle table-sm table-hover" key={controlGasto._id} >
                  <tr>
                    <th scope="row">{controlGasto.concepto}</th>
                    <td>{controlGasto.monto}</td>
                    <td>{moment(controlGasto.fecha_gasto).format('LL')}</td>
                    <td>{controlGasto.comprobante}</td>
                    <td>

                      <Link to={`/dashboard/admin/informacion-gasto?id=${controlGasto._id}`}>Visualizar Gasto</Link>
                    </td>
                    <td>
                      <Link to={`/dashboard/admin/GastosActualizarPage?id=${controlGasto._id}`}>
                        <i className=" bi bi-pencil-fill" id="editar"></i>
                      </Link>

                    </td>
                    <td>
                      <button onClick={(e) => deleteItem(controlGasto._id)} >     <i
                        className="bi bi-trash-fill "
                        id="borrar"></i></button>
                    </td>
                  </tr>
                </tbody>
                //  onClick={() => setIsOpen(true)}

                // <ShowControlGastos key={controlGasto._id} {...controlGasto} />
              )
            })}
          </table>
        </div>

        <div>

        </div>

        <Footer />
      </div>
      {dialog.isLoading && <Modal onDialog={areUSureDelete} children={dialog.children} />}
    </div>
  );
};

export default ControlGastos;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import 'moment/locale/es';
import './ControlGastos.scss'
import Modal2 from "../ModalDeleteGasto/Modal2";

export const GastosRowItem = ({
  _id,
  concepto,
  monto,
  fecha_gasto,
  comprobante,
  setControlGastos
}) => {
  const urlApi = process.env.REACT_APP_URL_API;
  const [openModal, setOpenModal] = useState(false);
  const deleteOperation = async (_id) => {
    await axios.delete(`${urlApi}/gastos/${_id}`);
    setOpenModal(false);
    setControlGastos((controlGastos) => controlGastos.filter(gasto => gasto._id !== _id));
  }

  return (
    <>
      <tr>
        <th scope="row">{concepto}</th>
        <td>{monto}</td>
        <td>{moment(fecha_gasto).format('LL')}</td>
        <td>{comprobante}</td>
        <td>

          <Link to={`/dashboard/admin/informacion-gasto?id=${_id}`}>Visualizar Gasto</Link>
        </td>
        <td>
          <Link to={`/dashboard/admin/GastosActualizarPage?id=${_id}`}>
            <i className=" bi bi-pencil-fill" id="editar"></i>
          </Link>

        </td>
        <td>
          <button onClick={() => setOpenModal(true)} > <i
            className="bi bi-trash-fill "
            id="borrar"></i></button>
          <Modal2 open={openModal} onClose={() => setOpenModal(false)} onFunction={() => deleteOperation(_id)}
          />

        </td>
      </tr>
    </>
  );
};

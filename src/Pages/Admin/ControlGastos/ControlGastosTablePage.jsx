import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import 'moment/locale/es';
import './ControlGastos.scss'

export const ControlGastosTablePage = ({
  _id,
  concepto,
  monto,
  fecha_gasto,
  comprobante,

}) => {
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
          <button   >     <i
            className="bi bi-trash-fill "
            id="borrar"></i></button>
        </td>
      </tr>
    </>
  );
};

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import 'moment/locale/es';
import './ControlGastos.scss'
const urlApi = process.env.REACT_APP_URL_API;

export const ShowControlGastos = ({
  _id,
  concepto,
  monto,
  fecha_gasto,
  comprobante,
}) => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!_id) return;
    const termUrl = encodeURIComponent(_id.trim());
    const result = await axios.delete(`${urlApi}/gastos/${termUrl}`);
    window.location.reload();
  };


  return (
    <>
      <div className="  d-table table-responsive" id="tabla-reporte mx-4">


        <table id="tabla-reporte" className="table bg-white rounded mx-3 table align-middle table-sm">
          <thead  >
            <tr className="vertical-align:middle">
              <th scope="col" className="text-center">Concepto</th>
              <th scope="col">Mes</th>
              <th scope="col">Monto</th>
              <th scope="col">Comprobante</th>
            </tr>
          </thead>
          <tbody>
            <tr className="vertical-align:middle">
              <th scope="row" className="text-center">{concepto}</th>
              <td>{moment(fecha_gasto).format('LL')}</td>
              <td>{monto}</td>
              <td>{comprobante}</td>
              <td>

                <span className="text-center">

                  {" "}
                  <Link to={`/dashboard/admin/informacion-gasto?id=${_id}`}>Visualizar Gasto</Link>
                </span>
              </td>
              <td>
                <Link to={`/dashboard/admin/GastosActualizarPage?id=${_id}`}>
                  <i className=" bi bi-pencil-fill" id="editar"></i>
                </Link>
              </td>



              <div
                class="modal fade"
                id="deleteModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                    </div>
                    <div class="modal-body">
                      ¿Seguro que deseas eliminar el residente selecionado?
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <form onSubmit={handleSubmit} id="deleteForm">
                        <button

                          data-bs-id={`dashboard/admin/GastosActualizarPage?id=${_id}`}
                          type="submit"
                          class="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Eliminar
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <a data-bs-toggle="modal" data-bs-target="#deleteModal" href="#">
                <i
                  className="bi bi-trash-fill openModalBtn "
                  id="borrar"

                ></i>
              </a>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import Modal from '../../../Components/Modal/Modal'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const urlApi = process.env.REACT_APP_URL_API;

export const ShowControlGastos = ({ _id, concepto, monto, fecha_gasto, comprobante, descripcion, imagen_mejora }) => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!_id) return;
        const termUrl = encodeURIComponent(_id.trim());

        const termUrl2 = encodeURIComponent(Object.values({ concepto })[0]);

        const result = await axios.delete(`${urlApi}/gastos/${termUrl}`);

        navigate(`/GastosActualizarPage?name=${termUrl2}`);
    };
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <thead id="tabla-pagos" className="table bg-white">
                <tr>
                    <th scope="col">Concepto</th>
                    <th scope="col">Mes</th>
                    <th scope="col">Monto</th>
                    <th scope="col">Comprobante</th>
                </tr>
            </thead>
            <tbody>
                <tr id="tabla-pagos" className="table bg-white">
                    <th scope="row">{concepto}</th>
                    <td>{fecha_gasto}</td>
                    <td>{monto}</td>
                    <td>{comprobante}</td>

                    <button> <Link to="/admin/informacion-gasto">Ver Gasto</Link></button>
                    <h3 className="m-0 p-0">
                        <h3 className="m-0 p-0">
                            <Link to={`/admin/GastosActualizarPage?id=${_id}`}>
                                <i className="me-3 bi bi-pencil-fill" id="editar"></i>
                            </Link>
                        </h3>
                        <h3 className="m-0 p-0">

                            <i className="bi bi-trash-fill openModalBtn" id="borrar" onClick={() => setOpenModal(true)} style={{ cursor: 'pointer' }}></i>
                            {openModal && <Modal closeModal={setOpenModal} />}

                        </h3>
                    </h3>
                </tr>
            </tbody>

        </>



    );
}
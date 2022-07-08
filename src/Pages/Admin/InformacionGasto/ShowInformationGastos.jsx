import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FiEdit3 } from 'react-icons/fi'
import { FaTrashAlt } from 'react-icons/fa'
import { TiCancel } from 'react-icons/ti'
import Button from 'react-bootstrap/Button'
import { useFormik } from "formik";
import { ShowInformationRequest } from './Services/ShowInformationRequest';
import { useHttp } from '../../../Hooks/useHttp';
import queryString from "query-string";
import { useLocation } from "react-router-dom";

export const ShowInformationGastos = ({ _id, concepto, monto, fecha_gasto, comprobante, }) => {

    const location = useLocation();
    const { id } = queryString.parse(location.search);
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        handleReset,
        setFieldValue,
    } = useFormik({
        initialValues: {
            concepto: "",
            monto: "",
            fecha_gasto: "",
            comprobante: "",
        },

        onSubmit: () => request(),
        onReset: () => {
            const source = document.getElementById("source");
            source.innerText = "";
        },
    });
    const { loading, request, error, data } = useHttp(ShowInformationRequest, {
        concepto: values.concepto,
        monto: values.monto,
        fecha_gasto: values.fecha_gasto,
        comprobante: values.comprobante,
        id: id,
    });
    const urlApi = process.env.REACT_APP_URL_API;

    return (
        <div className="ResidenteCMain">
            <div className="ResidenteCContainer">
                <div className="ResidenteCContent">
                    <form
                        onSubmit={handleSubmit}
                        onReset={handleReset}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span>Concepto: </span>
                                    </td>
                                    <td>
                                        {" "}
                                        <input
                                            type="concepto"
                                            value={values.concepto}
                                            onChange={handleChange}
                                            name="concepto"
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Monto: </span>
                                    </td>
                                    <td>
                                        <input
                                            type="monto"
                                            value={values.monto}
                                            onChange={handleChange}
                                            name="monto"
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Fecha de Gasto: </span>
                                    </td>
                                    <td>
                                        <input
                                            type="fecha_gasto"
                                            value={values.fecha_gasto}
                                            onChange={handleChange}
                                            name="fecha_gasto"
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Comprobante: </span>
                                    </td>
                                    <td>
                                        <input
                                            type="comprobante"
                                            value={values.comprobante}
                                            onChange={handleChange}
                                            name="comprobante"
                                        ></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="botones_f">
                            <button id="button_limpiar" type="reset">
                                Limpiar
                            </button>

                            <button id="button_enviar" type="submit">
                                Actualizar
                            </button>
                        </div>
                        <div id="source"></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ShowInformationGastos 
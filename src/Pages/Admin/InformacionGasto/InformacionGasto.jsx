import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import { useHttp } from '../../../Hooks/useHttp'
import { NavAdmin } from '../../../Components/NavAdmin/NavAdmin'
import { Footer } from '../../../Components/Home/Footer/Footer'
import { ShowInformationGastos } from './ShowInformationGastos'
import queryString from "query-string";
import axios from "axios";
import { ShowInformationRequest } from './Services/ShowInformationRequest'
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";

function InformacionGasto() {
    const navigate = useNavigate();
    const location = useLocation();
    const urlApi = process.env.REACT_APP_URL_API;
    const { id } = queryString.parse(location.search);
    console.log(queryString.parse(location.search))

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

    useEffect(() => {
        if (data.success) {
            navigate(".");
            const source = document.getElementById("source");
            source.innerText = "Residente actualizado exitosamente";
        } else if (data.success == false) {
            navigate(".");
            const source = document.getElementById("source");
            source.innerText = "Residente no se pudo actualizar";
        } else {
            const source = document.getElementById("source");
            source.innerText = "";
        }
    }, [data]);

    useEffect(() => {
        async function fetchData() {
            // You can await here

            const result = await axios.get(`${urlApi}/gastos/${id}`);
            const { concepto, monto, fecha_gasto, comprobante } = result.data.payload;
            setFieldValue("concepto", concepto);
            setFieldValue("monto", monto);
            setFieldValue("fecha_gasto", fecha_gasto);
            setFieldValue("comprobante", comprobante);
        }
        fetchData();
    }, []);


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
                                        <span>Fecha de gasto: </span>
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

                        <div id="source"></div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default InformacionGasto

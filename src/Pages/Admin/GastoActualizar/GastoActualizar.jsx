import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../../Hooks/useHttp";
import { ActualizarGastoRequest } from "./Services/ActualizarGastoRequest";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import moment from "moment";
import 'moment/locale/es';
import '../../../Components/ResidenteActualizar/ResidenteActualizar.scss'

const GastoActualizar = () => {
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

    const { loading, request, error, data } = useHttp(ActualizarGastoRequest, {
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
            source.innerText = "Gasto actualizado exitosamente";
        } else if (data.success == false) {
            navigate(".");
            const source = document.getElementById("source");
            source.innerText = "Gasto no se pudo actualizar";
        } else {
            const source = document.getElementById("source");
            source.innerText = "";
        }
    }, [data]);

    useEffect(() => {
        async function fetchData() {

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
                                        <span>Fecha de Gasto: </span>
                                    </td>
                                    <td>
                                        <input
                                            type="fecha_gasto"
                                            value={moment(values.fecha_gasto).format('LL')}
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

                            <button id="button_enviar" type="submit"
                                onClick={() => setTimeout(() => { navigate('../controlGastos') }, 1000)}>

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

export default GastoActualizar
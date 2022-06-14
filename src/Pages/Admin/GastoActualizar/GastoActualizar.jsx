import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../../Hooks/useHttp";
import { ActualizarGastoRequest } from "./Services/ActualizarGastoRequest";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const GastoActualizar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const urlApi = process.env.REACT_APP_URL_API;
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

    const { loading, request, error, data } = useHttp(ActualizarGastoRequest, {
        concepto: values.nombre,
        monto: values.numCasa,
        fecha_gasto: values.email,
        comprobante: values.telefono,
        id: id
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
                        <div className="field">
                            <span>Concepto: </span>
                            <input
                                type="concepto"
                                value={values.concepto}
                                onChange={handleChange}
                                name="concepto"
                            ></input>
                        </div>
                        <div className="field">
                            <span>Monto: </span>
                            <input
                                type="monto"
                                value={values.monto}
                                onChange={handleChange}
                                name="monto"
                            ></input>
                        </div>
                        <div className="field">
                            <span>Fecha de Gasto: </span>
                            <input
                                type="fecha_gasto"
                                value={values.fecha_gasto}
                                onChange={handleChange}
                                name="fecha_gasto"
                            ></input>
                        </div>
                        <div className="field">
                            <span>Comprobante: </span>
                            <input
                                type="Comprobante"
                                value={values.comprobante}
                                onChange={handleChange}
                                name="Comprobante"
                            ></input>
                        </div>
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

export default GastoActualizar
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHttp } from '../../../Hooks/useHttp'
import { NavAdmin } from '../../../Components/NavAdmin/NavAdmin'
import { Footer } from '../../../Components/Home/Footer/Footer'
import queryString from "query-string";
import axios from "axios";
import { ShowInformationRequest } from './Services/ShowInformationRequest'
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import './InformacionGasto.scss'
function InformacionGasto() {
    const navigate = useNavigate();
    const location = useLocation();
    const urlApi = process.env.REACT_APP_URL_API;
    const { id } = queryString.parse(location.search);
    console.log(queryString.parse(location.search))

    const {
        values,
        setFieldValue,
    } = useFormik({
        initialValues: {
            concepto: "",
            monto: "",
            fecha_gasto: "",
            comprobante: "",
        },
    });
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


        <div style={{
            backgroundColor: "#747e7e"
        }}>
            <NavAdmin />
            <div className="ResidenteCContainer d-flex justify-content-center">
                <div className="ResidenteCContent w-50 m-3">
                    <form

                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
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
                                            name="comprobante"
                                        ></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div id="source"></div>
                    </form>
                    <div className='returnDiv'>

                        <Link to='../controlGastos'>
                            <button id="returnBack">regresar</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default InformacionGasto

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
import moment from 'moment';
import 'moment/locale/es'

function InformacionGasto() {
    const navigate = useNavigate();
    const location = useLocation();
    const urlApi = process.env.REACT_APP_URL_API;
    const { id } = queryString.parse(location.search);
    console.log(queryString.parse(location.search))

    const {
        setFieldValue,
        handleChange,
        values,
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
                <div className="ResidenteCContent w-50 m-5">
                    <form

                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "20px",
                        }}
                    >
                        <table>
                            <tbody>
                                <tr>
                                    <td >
                                        <span>Concepto: </span>
                                    </td>
                                    <td>
                                        {" "}
                                        <span>
                                            {values.concepto}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Monto: </span>
                                    </td>
                                    <td>
                                        <span>
                                            {values.monto}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Fecha de gasto: </span>
                                    </td>
                                    <td>
                                        <span>
                                            {moment(values.fecha_gasto).format("LL")}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Comprobante: </span>
                                    </td>
                                    <td>
                                        <span>
                                            {values.comprobante}
                                        </span>                                    </td>
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

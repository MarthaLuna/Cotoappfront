import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../../Hooks/useHttp";
import { CrearGastosServiceRequest } from "./Services/CrearGastoService";
import { NavAdmin } from "../../../Components/NavAdmin";
import { Footer } from "../../../Components/Home/Footer";
import moment from "moment";
import 'moment/locale/es';
import './GastosCrear.scss'

const GastosCrear = () => {
    const navigate = useNavigate();

    const { handleSubmit, handleChange, values, errors, handleReset } = useFormik(
        {
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
        }
    );

    const { loading, request, error, data } = useHttp(CrearGastosServiceRequest, {
        concepto: values.concepto,
        monto: values.monto,
        fecha_gasto: values.fecha_gasto,
        comprobante: values.comprobante,
    });

    useEffect(() => {
        if (data.success) {
            navigate("./");
            const source = document.getElementById("source");
            source.innerText = "Gasto agregado exitosamente";
        } else if (data.success == false) {
            navigate(".");
            const source = document.getElementById("source");
            source.innerText = "Gasto no se puede crear";
        } else {
            const source = document.getElementById("source");
            source.innerText = "";
        }
    }, [data]);
    return (
        <>
            <NavAdmin />
            <div className="ResidenteCMain ">
                <div className="ResidenteCContainer d-flex justify-content-center">
                    <div className="ResidenteCContent w-50 m-3">
                        <form
                            onSubmit={handleSubmit}
                            onReset={handleReset}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "20px",
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
                                            <span>Comprobante del Gasto: </span>
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
                        <div className="d-flex justify-content-evenly">
                            <button id="clean" type="button" className="pr-3">
                                Limpiar
                            </button>

                            <button id="register" type="button " className="pr-3"
                                onClick={() => setTimeout(() => { navigate('../controlGastos') }, 1000)}>
                                Registrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default GastosCrear
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../Hooks/useHttp";
import { RegisterAdminsServiceRequest } from "./services/RegisterAdminsServiceRequest";
import '../../../src/Components/ResidenteCrear/ResidenteCrear.scss';

export const RegisterAdminsShowPage = () => {
    const navigate = useNavigate()
    const { handleSubmit, handleChange, values, errors, handleReset } = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            casa: "",
            telefono: "",
            nombreCoto: "",

        },
        validate: (values) => {
            const errors = {};
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Email no es valido";
            }
            return errors;
        },
        onSubmit: () => request(),
        onReset: () => {
            const source = document.getElementById("source");
            source.innerText = "";
        },
    }
    );
    const { loading, request, error, data } = useHttp(RegisterAdminsServiceRequest, {
        nombre: values.nombre,
        email: values.email,
        casa: values.casa,
        telefono: values.telefono,
        nombreCoto: values.nombreCoto,
    });

    useEffect(() => {
        if (data.success) {
            navigate(".");
            const source = document.getElementById("source");
            source.innerText = "Administrador de coto creado exitosamente";
        } else if (data.success == false) {
            navigate(".");
            const source = document.getElementById("source");
            source.innerText = "Administrador no se pudo crear";
        } else {
            const source = document.getElementById("source");
            source.innerText = "";
        }
    }, [data]);

    return (
        <div className="ResidenteCMain" >
            <div className="ResidenteCContainer">
                <div className="ResidenteCContent">
                    <form
                        onSubmit={handleSubmit}
                        onReset={handleReset}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span>
                                            Nombre:
                                        </span>
                                    </td>
                                    <td>
                                        {""}
                                        <input
                                            type="nombre"
                                            value={values.nombre}
                                            onChange={handleChange}
                                            name="nombre"
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            Email:
                                        </span>
                                    </td>
                                    <td>
                                        <input
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            name="email"
                                        ></input>
                                        {errors.email && <span> Ingresa un email valido</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            Casa:
                                        </span>
                                    </td>
                                    <td>
                                        <input
                                            type="casa"
                                            value={values.casa}
                                            onChange={handleChange}
                                            name="casa"
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            Telefono:
                                        </span>
                                    </td>
                                    <td>
                                        <input
                                            type="telefono"
                                            value={values.telefono}
                                            onChange={handleChange}
                                            name="telefono"
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            nombreCoto:
                                        </span>
                                    </td>
                                    <td>
                                        <input
                                            type="nombreCoto"
                                            value={values.nombreCoto}
                                            onChange={handleChange}
                                            name="nombreCoto"
                                        ></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="botones_f">
                            <button id='button_limpiar' type='reset'>
                                Limpiar
                            </button>
                            <button id="button_enviar" type="submit">
                                Registrar
                            </button>
                        </div>
                        <div id="source"></div>
                    </form>
                </div>
            </div>
        </div >

    )
}

import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../Hooks/useHttp";
import { crearRRequest } from "./Services/CrearResidenteService";

import "./ResidenteCrear.scss";

export const ResidenteCrear = () => {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values, errors, handleReset } = useFormik(
    {
      initialValues: {
        nombre: "",
        numCasa: "",
        email: "",
        telefono: "",
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

  const { loading, request, error, data } = useHttp(crearRRequest, {
    nombre: values.nombre,
    numCasa: values.numCasa,
    email: values.email,
    telefono: values.telefono,
  });

  useEffect(() => {
    console.log("data", data);
    if (data.success) {
      navigate(".");
      const source = document.getElementById("source");
      source.innerText = "Residente creado exitosamente";
      setTimeout(navigate("/dashboard/admin/residentes"), 30000);
    } else if (data.success == false) {
      navigate(".");
      const source = document.getElementById("source");
      source.innerText = "Residente no se pudo crear";
    } else {
      const source = document.getElementById("source");
      source.innerText = "";
    }
  }, [data]);

  useEffect(() => {
    const source = document.getElementById("source");
    source.innerText =
      "Lo sentimos no se puede guardar sus datos, valide la información";
  }, [error]);

  useEffect(() => {
    const source = document.getElementById("source");
    source.innerText = "";
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
                    <span>Nombre: </span>
                  </td>
                  <td>
                    {" "}
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
                    <span>No. Casa: </span>
                  </td>
                  <td>
                    <input
                      type="numCasa"
                      value={values.numCasa}
                      onChange={handleChange}
                      name="numCasa"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Email: </span>
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
                    <span>Telefono: </span>
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
              </tbody>
            </table>

            <div className="botones_f">
              <button id="button_limpiar" type="reset">
                Limpiar
              </button>

              <button id="button_enviar" type="submit">
                Enviar
              </button>
            </div>
            <div id="source"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

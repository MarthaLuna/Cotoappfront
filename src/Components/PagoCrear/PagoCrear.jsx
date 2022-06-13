import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../Hooks/useHttp";
import { crearRRequest } from "./Services/CrearPagoService";

import "./PagoCrear.scss";

import useUser from "../../Hooks/useUser";

export const PagoCrear = () => {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values, errors, handleReset } = useFormik(
    {
      initialValues: {
        casa: "",
        monto: "",
        fecha: "",
        concepto: "",
      },
      onSubmit: () => request(),
      onReset: () => {
        const source = document.getElementById("source");
        source.innerText = "";
      },
    }
  );

  const { loading, request, error, data } = useHttp(crearRRequest, {
    casa: values.casa,
    monto: values.monto,
    fecha: values.fecha,
    concepto: values.concepto,
  });

  useEffect(() => {
    if (data.success) {
      navigate(".");
      const source = document.getElementById("source");
      source.innerText = "Pago registrado exitosamente";
    } else if (data.success == false) {
      navigate(".");
      const source = document.getElementById("source");
      source.innerText = "Pago no se pudo registrar";
    } else {
      const source = document.getElementById("source");
      source.innerText = "";
    }
  }, [data]);

  return (
    <div className="PagoCMain">
      <div className="PagoCContainer">
        <div className="PagoCContent">
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
                    <span>Casa: </span>
                  </td>
                  <td>
                    {" "}
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
                    <span>Fecha: </span>
                  </td>
                  <td>
                    <input
                      type="fecha"
                      value={values.fecha}
                      onChange={handleChange}
                      name="fecha"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Concepto: </span>
                  </td>
                  <td>
                    <input
                      type="concepto"
                      value={values.concepto}
                      onChange={handleChange}
                      name="concepto"
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <input id="button_enviar" type="file" accept="image/*" />
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

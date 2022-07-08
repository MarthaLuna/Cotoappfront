import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../Hooks/useHttp";
import { crearRRequest } from "./Services/CrearPagoService";

import "./PagoCrear.scss";

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
    fecha_pago: values.fecha,
    pago_id: values.concepto,
    comprobante: "comprobante",
    aprobado: true,
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
                    <select
                      name="casa"
                      value={values.casa}
                      onChange={handleChange}
                    >
                      <option value="" label="Casa">
                        Casa{" "}
                      </option>
                      <option value="1" label="1">
                        {" "}
                        red
                      </option>
                      <option value="2" label="2">
                        blue
                      </option>

                      <option value="3" label="3">
                        green
                      </option>
                    </select>
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
                      type="date"
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
                    <select
                      name="concepto"
                      value={values.concepto}
                      onChange={handleChange}
                    >
                      <option value="" label="Concepto">
                        Concepto{" "}
                      </option>
                      <option value="Mantenimiento" label="Mantenimiento">
                        {" "}
                        Mantenimiento
                      </option>
                      <option value="Llaves" label="Llaves">
                        Llaves
                      </option>

                      <option value="Control" label="Control">
                        Escalera
                      </option>
                    </select>
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

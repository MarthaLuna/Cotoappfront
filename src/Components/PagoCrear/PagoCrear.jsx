import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../Hooks/useHttp";
import { crearRRequest } from "./Services/CrearPagoService";
import axios from "axios";
import "./PagoCrear.scss";

const urlApi = process.env.REACT_APP_URL_API;

export const PagoCrear = () => {
  const navigate = useNavigate();
  const [casas, setCasas] = useState([]);
  const [files, setFiles] = useState("");
  const [formDatav, setFormData] = useState("");

  const handleFile = (e) => {
    // Getting the files from the input
    let files = e.target.files;
    console.log(files);
    setFiles({ files });

    let formData = new FormData();

    //Adding files to the formdata
    formData.append("image", files);
    formData.append("name", "Name");
    setFormData(formData);
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here

      const results = await axios.get(`${urlApi}/residentes`);
      const casasRes = [];
      let num = Object.values(results)[0].payload.length;
      console.log("num", num);
      const resultsC = Object.values(results)[0].payload;
      setCasas(resultsC);

      console.log("casas", casas);
    }
    fetchData();
  }, []);

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
    formDatav: formDatav,
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
                      {casas.map((casa) => {
                        return (
                          <option
                            key={casa.casa}
                            value={casa.casa}
                            label={casa.casa}
                          >
                            {" "}
                            red
                          </option>
                        );
                      })}
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
            <input type="file" onChange={handleFile} />
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

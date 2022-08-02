import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../../Hooks/useHttp";
import { CrearGastosServiceRequest } from "./Services/CrearGastoService";
import { NavAdmin } from "../../../Components/NavAdmin";
import { Footer } from "../../../Components/Home/Footer";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import "./GastosCrear.scss";

const GastosCrear = () => {
  const navigate = useNavigate();
  const urlApi = process.env.REACT_APP_URL_API;
  const [comprobante, setComprobante] = useState("");
  const handleFile = async (e) => {
    // Getting the files from the input
    let file = e.target.files[0];

    //Get secure url from our server
    const url = await axios.get(`${urlApi}/s3/s3Url`);
    console.log(url.data.url);
    // Post the image directly to the s3 bucket
    await fetch(url.data.url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: file,
    });
    //Show image
    const imageUrl = url.data.url.split("?")[0];
    console.log(imageUrl);
    setComprobante(imageUrl);
  };

  const { handleSubmit, handleChange, values, handleReset } = useFormik({
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

  const { loading, request, error, data } = useHttp(CrearGastosServiceRequest, {
    concepto: values.concepto,
    monto: values.monto,
    fecha_gasto: values.fecha,
    comprobante: comprobante,
  });

  useEffect(() => {
    if (data.success) {
      navigate(".");
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
    <div style={{ backgroundColor: "#747e7e" }}>
      <NavAdmin />

      <div className="ResidenteCContainer d-flex justify-content-center">
        <div className="ResidenteCContent w-50 m-5">
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
                      type="date"
                      value={values.fecha}
                      onChange={handleChange}
                      name="fecha"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Comprobante del Gasto: </span>
                  </td>
                  <td>
                    <input type="file" onChange={handleFile} />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="botones_f">
              <button id="button_limpiar" type="reset">
                Limpiar
              </button>

              <button
                id="button_enviar"
                type="submit"
                onClick={() =>
                  setTimeout(() => {
                    navigate("../controlGastos");
                  }, 1000)
                }
              >
                Registrar
              </button>
            </div>
            <div id="source"></div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GastosCrear;

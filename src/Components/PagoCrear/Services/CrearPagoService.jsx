import axios from "axios";

const urlApi = process.env.REACT_APP_URL_API;

export const crearRRequest = async ({
  casa,
  monto,
  fecha,
  concepto,
  comprobante,
  aprobado,
}) => {
  const result = await axios.post(`${urlApi}/pagos`, {
    casa,
    monto,
    fecha,
    concepto,
    comprobante,
    aprobado,
  });
  return result.data;
};

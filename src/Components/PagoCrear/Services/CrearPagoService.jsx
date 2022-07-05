import axios from "axios";

const urlApi = process.env.REACT_APP_URL_API;

export const crearRRequest = async ({
  casa,
  monto,
  fecha_pago,
  pago_id,
  comprobante,
  aprobado,
}) => {
  const result = await axios.post(`${urlApi}/pagos`, {
    monto,
    fecha_pago,
    comprobante,
    aprobado,
    casa,
    pago_id,
  });
  return result.data;
};

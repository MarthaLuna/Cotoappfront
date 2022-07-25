import axios from "axios";

const urlApi = process.env.REACT_APP_URL_API;

export const crearRRequest = async ({
  casa,
  monto,
  fecha_pago,
  pago_id,
  comprobante,
  aprobado,
  formDatav,
}) => {
  console.log("data", formDatav);
  const result = await axios.post(
    `${urlApi}/pagos`,
    {
      monto,
      fecha_pago,
      comprobante,
      aprobado,
      casa,
      pago_id,
      data: formDatav,
    },
    {
      headers: formDatav.getHeaders(),
    }
  );

  return result.data;
};

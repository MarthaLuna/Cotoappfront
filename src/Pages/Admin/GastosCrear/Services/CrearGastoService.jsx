import axios from 'axios';

const urlApi = process.env.REACT_APP_URL_API;

export const CrearGastosServiceRequest = async ({ concepto, monto, fecha_gasto, comprobante }) => {

    const result = await axios.post(`${urlApi}/gastos`, { concepto, monto, fecha_gasto, comprobante });
    return result.data;
};
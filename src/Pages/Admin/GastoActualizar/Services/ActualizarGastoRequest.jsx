
import axios from "axios";

const urlApi = process.env.REACT_APP_URL_API;

export const ActualizarGastoRequest = async ({
    concepto,
    monto,
    fecha_gasto,
    comprobante,
    id,

}) => {
    const result = await axios.put(`${urlApi}/gastos/${id}`, {
        concepto,
        monto,
        fecha_gasto,
        comprobante,
    });
    return result.data;
};

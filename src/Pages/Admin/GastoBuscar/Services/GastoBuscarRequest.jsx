import axios from "axios";

const urlApi = process.env.REACT_APP_URL_API;

export const GastoBuscarRequest = async ({ concepto }) => {
    const result = await axios.post(`${urlApi}/gastos/${concepto}`);
    return result.data;
};

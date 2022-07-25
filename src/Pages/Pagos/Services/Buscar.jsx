import axios from "axios";

const urlApi = process.env.REACT_APP_URL_API;

export const pagosBuscarRequest = async ({ mes }) => {
  const result = await axios.get(`${urlApi}/queryPagosAdminMensuales/${mes}`);
  return result.data;
};

export const pagosBuscarAnioRequest = async ({ anio }) => {
  const result = await axios.get(`${urlApi}/queryPagosAdminAnual/${anio}`);
  console.log(result.data);
  return result.data;
};

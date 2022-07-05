import axios from "axios";

const urlApi = process.env.REACT_APP_URL_API;

export const pagosBuscarRequest = async ({ nombre }) => {
  const result = await axios.get(
    `${urlApi}/queryPagosAdminMensuales/${nombre}`
  );
  return result.data;
  console.log(result.data);
};

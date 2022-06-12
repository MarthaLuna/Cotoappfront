import axios from "axios";

const urlApi = process.env.REACT_APP_URL_API;

export const residentesBuscarRequest = async ({ nombre }) => {
  const result = await axios.post(`${urlApi}/residentes/${nombre}`);
  return result.data;
};

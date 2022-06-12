import axios from "axios";

const urlApi = process.env.REACT_APP_URL_API;

export const ServiceRequest = async () => {
  const result = await axios.get(`${urlApi}/gastos`);

  return result.data;
};

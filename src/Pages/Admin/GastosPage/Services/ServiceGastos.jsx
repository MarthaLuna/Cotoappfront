import axios from 'axios';

const urlApi = process.env.REACT_APP_URL_API;

export const gastosRequest = async () => {
  console.log("url", urlApi)
  const result = await axios.get(`${urlApi}/gastos`);
  console.log("data", result.data)
  return result.data;
};
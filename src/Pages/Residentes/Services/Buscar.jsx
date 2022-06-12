import axios from 'axios';

const urlApi = process.env.REACT_APP_URL_API;

export const residentesBuscarRequest = async ({nombre}) => {
  console.log("url", urlApi)
  const result = await axios.post(`${urlApi}/residentes/${nombre}`);
  console.log("data", result.data)
  return result.data;
};
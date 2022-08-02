import axios from "axios";

const urlApi = process.env.REACT_APP_URL_API;

export const crearRRequest = async ({ nombre, email, numCasa, telefono }) => {
  const result = await axios.post(`${urlApi}/residentes`, {
    nombre,
    email,
    casa: numCasa,
    telefono,
  });
  return result.data;
};

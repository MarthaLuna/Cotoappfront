import axios from "axios";

const urlApi = process.env.REACT_APP_URL_API;

export const actualizarRRequest = async ({
  nombre,
  email,
  numCasa,
  telefono,
  id,
}) => {
  const result = await axios.put(`${urlApi}/residentes/${id}`, {
    nombre,
    email,
    casa: numCasa,
    telefono,
  });
  return result.data;
};

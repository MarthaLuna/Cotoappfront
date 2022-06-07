import axios from 'axios';

const urlApi = process.env.REACT_APP_URL_API;

export const isAdmin = async ({ token }) => {
  const result = await axios.get(`${urlApi}/auth/isAdmin`, {
    headers: {
      token,
    },
  });

  return result.data;
};
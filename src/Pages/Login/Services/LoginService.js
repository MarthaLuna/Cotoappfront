import axios from 'axios';

const urlApi = process.env.REACT_APP_URL_API;

const loginRequest = async ({ email, password }) => {
    const result = await axios.post(`${urlApi}/auth/login`, { email, password });
    return result.data;
};
export default loginRequest
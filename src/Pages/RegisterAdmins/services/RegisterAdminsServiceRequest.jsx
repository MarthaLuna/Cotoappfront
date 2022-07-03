import axios from "axios";
const urlApi = process.env.REACT_APP_URL_API;


export const RegisterAdminsServiceRequest = async ({ nombre, email, nombreCoto, logo, password }) => {
    const result = await axios.post(`${urlApi}/administradores`, { nombre, email, nombreCoto, logo, password });
    return result.data;


}

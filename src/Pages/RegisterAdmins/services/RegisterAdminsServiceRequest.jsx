import axios from "axios";
const urlApi = process.env.REACT_APP_URL_API;


export const RegisterAdminsServiceRequest = async ({ nombre, email, casa, telefono, nombreCoto }) => {
    const result = await axios.post(`${urlApi}/administradores`, { nombre, email, casa, telefono, nombreCoto });
    return result.data;


}

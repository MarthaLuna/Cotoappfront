import React from 'react'
import axios from 'axios'
const urlApi = process.env.REACT_APP_URL_API

const validToken = ({ token }) => {
    const result = await axios.get(`${urlApi}/auth/validToken`, {},
        {
            headers: {
                token,
            }
        })
    return result
}


export default validToken
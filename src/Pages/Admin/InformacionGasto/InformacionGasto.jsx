import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { TiCancel } from "react-icons/ti"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FiEdit3 } from 'react-icons/fi'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useHttp } from '../../../Hooks/useHttp'
import { ServiceRequest } from '../Services/ServiceRequest'
import { NavAdmin } from '../../../Components/NavAdmin/NavAdmin'
import { Footer } from '../../../Components/Home/Footer/Footer'
import { ShowInformationGastos } from './ShowInformationGastos'
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShowInformationRequest } from './Services/ShowInformationRequest'
import { useFormik } from "formik";

function InformacionGasto() {
    const navigate = useNavigate();
    const location = useLocation();
    const urlApi = process.env.REACT_APP_URL_API;
    const { id } = queryString.parse(location.search);
    console.log(queryString.parse(location.search))
    const [informacionGastos, setInformacionGastos] = useState([])
    const { loading, request, error, data } = useHttp(ShowInformationRequest, {
        nombre: values.nombre,
        numCasa: values.numCasa,
        email: values.email,
        telefono: values.telefono,
        id: id,
    });
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        handleReset,
        setFieldValue,
    } = useFormik({
        initialValues: {
            nombre: "",
            numCasa: "",
            email: "",
            telefono: "",
        },
        onSubmit: () => request(),
        onReset: () => {
            const source = document.getElementById("source");
            source.innerText = "";
        },
    });

    useEffect(() => {
        request()
    }, [])
    useEffect(() => {
        async function fetchData() {
            // You can await here

            const result = await axios.get(`${urlApi}/residentes/${id}`);
            const { nombre, email, casa, telefono } = result.data.payload;
            setFieldValue("nombre", nombre);
            setFieldValue("email", email);
            setFieldValue("numCasa", casa);
            setFieldValue("telefono", telefono);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (Object.keys(data).length != 0) {
            setInformacionGastos(data.payload);
            // console.log(data.payload);
            // console.log(Object.keys(data.payload[0]).toString())
        }
    }, [data]);

    return (
        <>
            <div id="Home-Container">
                <NavAdmin />
                <div className="text-secondary">
                    {informacionGastos.map((informacionGasto) => (


                        <ShowInformationGastos key={informacionGasto._id}{...informacionGasto} />
                    ))}
                </div>
                <Footer />
            </div>






        </>
    )
}

export default InformacionGasto

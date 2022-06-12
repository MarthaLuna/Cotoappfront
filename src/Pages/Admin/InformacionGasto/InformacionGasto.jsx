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
import { ShowInformationGastos } from './ShowInformationGastos'
import { NavAdmin } from '../../../Components/NavAdmin/NavAdmin'
import { Footer } from '../../../Components/Home/Footer/Footer'

function InformacionGasto() {
    const [informacionGastos, setInformacionGastos] = useState([])
    const { loading, request, error, data } = useHttp(ServiceRequest)

    useEffect(() => {
        request()
    }, [])

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
                <div className="text-danger">
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
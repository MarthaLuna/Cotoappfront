import React, { useState, useEffect } from 'react'

import { NavAdmin } from '../../../Components/NavAdmin';
import { Footer } from '../../../Components/Home/Footer';
import { useHttp } from '../../../Hooks/useHttp';
// import { ServiceRequest } from '../Services/ServiceRequest';
import { ShowEditarGastos } from '../EditarGasto/ShowEditarGastos';
import { Link } from 'react-router-dom';
import { ServiceEditGasto } from './Services/ServideEditGasto';


const EditarGasto = () => {
    const [editarGastos, setEditarGastos] = useState([])
    const { loading, request, error, data } = useHttp(ServiceEditGasto)
    useEffect(() => {
        request()
    }, [])

    useEffect(() => {
        if (Object.keys(data).length != 0) {
            setEditarGastos(data.payload);
            // console.log(data.payload);
            // console.log(Object.keys(data.payload[0]).toString())
        }
    }, [data]);

    return (

        <div id="Home-Container">
            <NavAdmin />
            <div className="text-secondary">
                {editarGastos.map((editarGasto) => (
                    <ShowEditarGastos key={editarGasto._id}{...editarGasto} />
                ))}
            </div>
            <Footer />
        </div>

    )
}

export default EditarGasto
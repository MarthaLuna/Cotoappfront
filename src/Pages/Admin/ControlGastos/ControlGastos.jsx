import React, { useState, useEffect } from 'react'

import { NavAdmin } from '../../../Components/NavAdmin';
import { Footer } from '../../../Components/Home/Footer';
import { useHttp } from '../../../Hooks/useHttp';
import { ServiceGastosRequest } from './Services/ServiceGastoRequest'
import { ShowControlGastos } from './ShowControlGastos'


const ControlGastos = () => {
    const [controlGastos, setControlGastos] = useState([])
    const { loading, request, error, data } = useHttp(ServiceGastosRequest)

    useEffect(() => {
        request()
    }, [])

    useEffect(() => {
        if (Object.keys(data).length != 0) {
            setControlGastos(data.payload);
            // console.log(data.payload);
            // console.log(Object.keys(data.payload[0]).toString())
        }
    }, [data]);

    return (
        <>

            <div id="Home-Container">
                <NavAdmin />
                <div className="text-danger">
                    {controlGastos.map((controlGasto) => (
                        <ShowControlGastos key={controlGasto._id}{...controlGasto} />
                    ))}
                </div>
                <Footer />
            </div>




        </>
    )
}

export default ControlGastos
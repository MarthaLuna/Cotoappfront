import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FiEdit3 } from 'react-icons/fi'
import { FaTrashAlt } from 'react-icons/fa'
import { TiCancel } from 'react-icons/ti'
import Button from 'react-bootstrap/Button'
import { useFormik } from "formik";
import { ShowInformationRequest } from './Services/ShowInformationRequest';
import { useHttp } from '../../../Hooks/useHttp';
import queryString from "query-string";
import { useLocation } from "react-router-dom";

export const ShowInformationGastos = ({ _id, concepto, monto, fecha_gasto, comprobante, descripcion, imagen_mejora }) => {

    const { loading, request, error, data } = useHttp(ShowInformationRequest, {
        concepto: values.concepto,
        monto: values.monto,
        fecha_gasto: values.fecha_gasto,
        comprobante: values.comprobante,
        id: id
    });
    useEffect(() => {
        request()
    }, [])
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        handleReset,
        setFieldValue,
    } = useFormik({
        initialValues: {
            concepto: "",
            monto: "",
            fecha_gasto: "",
            comprobante: "",
        },
    })
    const urlApi = process.env.REACT_APP_URL_API;
    const location = useLocation();
    const { id } = queryString.parse(location.search);

    return (
        <>
            <section className="d-flex  w-100 m-5">
                <div className="  w-100">
                    <Container>
                        <div className="mb-4 w-100 " style={{ color: "white" }}>
                            <h2 className="position-absolute top- start-50 translate-middle ">
                                Información de Gasto
                            </h2>
                        </div>
                    </Container >
                </div>
            </section>
            <section>
                <Container className=" p-4 d-flex flex-row justify-content-center w-100">
                    <div className="d-flex p-3">
                        <div>
                            <Card style={{ width: '20rem' }} className="mb-4 p-3">

                                <Card.Body >

                                    <form className='p-3'>
                                        <label>ID Gasto: </label>

                                        <label>{concepto}</label>



                                        <label>Concepto :       </label>
                                        <label htmlFor="" >{monto}</label>


                                        <form action="" >
                                            <label>Monto: </label>
                                            <label htmlFor="">{fecha_gasto}</label>

                                        </form>


                                        <label>Descripción </label>
                                        <label htmlFor="">{comprobante}</label>
                                    </form>

                                </Card.Body>
                            </Card>

                            <button type="button" className="red-button ">
                                <span >
                                    Editar <FiEdit3 />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className=' d-flex p-3'>
                        <div   >
                            <Card style={{ width: '18rem' }} className="mb-4" >
                                <Card.Body >
                                    <Card.Title className="d-flex justify-content-center" >Imagen adjunta</Card.Title>
                                    <Card.Img variant="top" src="https://www.comex.com.mx/getattachment/3d9dec4b-ed25-46ac-9ef0-447905365eca/.aspx/" />
                                </Card.Body>
                            </Card>
                            <button type="button" className="red-button ml-4 ">
                                <span >
                                    Eliminar <FaTrashAlt />
                                </span>
                            </button>
                            <Link to="/admin/controlGastos">
                                <Button className='m-2' variant="dark">Cancelar <TiCancel /></Button>{' '}
                            </Link>
                        </div>


                    </div>


                </Container>
            </section>
        </>
    )
}

export default ShowInformationGastos 
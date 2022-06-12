import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import Modal from '../../../Components/Modal/Modal'

export const ShowControlGastos = ({ _id, concepto, monto, fecha_gasto, comprobante, descripcion, imagen_mejora }) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <div id="Home-Container" style={{ background: "#747E7E" }}>
                <section className="Body d-flex align-items-center justify-content-center w-100">
                    <div className="Body-Container h-100 d-flex align-items-center justify-content-center w-100">
                        <Container className="Body-Content p-4 d-flex flex-column justify-content-start w-100">
                            <div className="mb-4 w-100 d-flex justify-content-end" style={{ color: "white" }}>
                                <h2 className="position-absolute top- start-50 translate-middle ">
                                    Control de Gastos
                                </h2>
                                <Link to="/registrar-gasto">
                                    <button type="button" className="red-button ">
                                        <span >
                                            Registrar Gasto
                                            <i className="ms-2 bi bi-plus-circle"></i>
                                        </span>
                                    </button>
                                </Link>
                            </div>
                            <div className="d-flex justify-content-between p-2 ">
                                <div className='d-flex justify-content-between'>
                                    <button type="button" className="red-button">Mes Actual
                                    </button>
                                    <button type="button" className="red-button">Año Actual
                                    </button>

                                </div>

                                <div className="d-flex  ">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            Mes del Año Actual
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            Año
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>



                            <div className="w-100 m-3">
                                <table id="tabla-pagos" className="table bg-white">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-center">Concepto</th>
                                            <th scope="col">Mes</th>
                                            <th scope="col">Monto</th>
                                            <th scope="col">Comprobante</th>
                                            <th scope="col" className="text-center"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="text-center">{concepto}</th>
                                            <td>{fecha_gasto}</td>
                                            <td>{monto}</td>
                                            <td>{descripcion}</td>

                                            <td>  <Link to="/admin/informacion-gasto">Ver Gasto</Link></td>

                                            <td className="text-center d-flex justify-content-center">
                                                <h3 className="m-0 p-0">
                                                    <Link to="/informacion-gasto"> <i className="me-3 bi bi-eye-fill m-0 p-0"></i></Link>

                                                </h3>
                                                <h3 className="m-0 p-0">
                                                    <Link to="/editar-gasto">
                                                        <i className="me-3 bi bi-pencil-fill" id="editar"></i>
                                                    </Link>
                                                </h3>
                                                <h3 className="m-0 p-0">

                                                    <i className="bi bi-trash-fill openModalBtn" id="borrar" onClick={() => setOpenModal(true)} style={{ cursor: 'pointer' }}></i>
                                                    {openModal && <Modal closeModal={setOpenModal} />}

                                                </h3>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>


                            </div>
                            <div className=' d-flex justify-content-center'>
                                <div className='d-flex flex-column'>
                                    <button type="button" >el gasto del mes no se puede eliminar
                                    </button>
                                    <button type="button" >gasto del mes ### actualizado
                                    </button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end'>

                                <div >
                                    <button type="button" className="red-button">Ver Gráfica
                                    </button>
                                </div>
                            </div>



                        </Container>
                    </div>
                </section>




                <div className="text-light">
                    <div>{concepto}</div>
                    {monto}
                </div>
            </div >
        </>



    );
}
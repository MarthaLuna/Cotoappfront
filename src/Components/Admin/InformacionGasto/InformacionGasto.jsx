import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { AiOutlineSend } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai"
import { BsFillBackspaceFill } from "react-icons/bs"
import { TiCancel } from "react-icons/ti"
import { FiRepeat } from "react-icons/fi"
import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FiEdit3 } from 'react-icons/fi'
import { FaTrashAlt } from 'react-icons/fa'

function InformacionGasto() {
    return (
        <>
            <Navbar className="mb-2" sticky="top" style={{ background: "#FF5F5D" }}>
                <Container className="d-flex justify-content-around">

                    <Navbar.Brand className="me-0" style={{ color: "#FFFFFF" }} href="#home">CotoApp</Navbar.Brand>
                    <div className="d-flex w-50 ms-2">
                        <div className="" style={{ color: "white" }}>Residentes</div>
                        <div className="ms-4" style={{ color: "white" }}>Pagos</div>
                        <div className="ms-4" style={{ color: "white" }}>Gastos</div>
                        <div className="ms-4" style={{ color: "white" }}>Reportes</div>
                    </div>
                    <button type="button" className="btn btn-outline-light">
                        <span className="d-none d-md-flex">
                            Salir
                            <i className="ms-2 bi bi-door-open-fill"></i>
                        </span>
                        <i className="d-md-none bi bi-door-open-fill"></i>
                    </button>

                </Container>
            </Navbar>

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
                                        <label>ID Gasto </label>
                                        <input type="text"
                                            required
                                        />



                                        <label>Concepto        </label>
                                        <input type="text"
                                            required
                                        />


                                        <form action="" >
                                            <label>Monto </label>
                                            <input type="text"
                                                required
                                            />

                                        </form>


                                        <label>Descripción </label>
                                        <input type="text"
                                            required
                                        />
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
                        </div>


                    </div>


                </Container>
            </section>

            <Navbar
                fixed="bottom"
                expand="lg"
                variant="light"
                style={{ background: "#FFFFFF" }}
                className="d-flex flex-column pt-0"
            >
                <div className="w-100">
                    <div className="p-0 m-0" style={{ background: "#FFFFFF" }, { height: "2px" }}></div>
                    <div className="pb-1" style={{ background: "#747E7E" }}></div>
                </div>
                <Container className="d-flex align-items-center justify-content-center">
                    <div className="pt-2 d-flex align-items-center justify-content-center">
                        <small className="m-0 me-1" style={{ color: "#747E7E" }}>
                            Powered by
                        </small>
                        <Navbar.Brand
                            className="m-0 p-0"
                            style={{ color: "#FF5F5D" }}
                            href="#"
                        >
                            CotoApp
                        </Navbar.Brand>
                    </div>
                </Container>
            </Navbar>

        </>
    )
}

export default InformacionGasto
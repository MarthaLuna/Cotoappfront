import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


const ControlGastos = () => {
    return (
        <>
            <div id="Home-Container" style={{ background: "#747E7E" }}>
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

                <section className="Body d-flex align-items-center justify-content-center w-100">
                    <div className="Body-Container h-100 d-flex align-items-center justify-content-center w-100">
                        <Container className="Body-Content p-4 d-flex flex-column justify-content-start w-100">
                            <div className="mb-4 w-100 d-flex justify-content-end" style={{ color: "white" }}>
                                <h2 className="position-absolute top- start-50 translate-middle ">
                                    Control de Gastos
                                </h2>
                                <button type="button" className="red-button ">
                                    <span >
                                        Registrar Gasto
                                        <i className="ms-2 bi bi-plus-circle"></i>
                                    </span>
                                </button>
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
                                            <th scope="row" className="text-center">Basura</th>
                                            <td>Enero</td>
                                            <td>500</td>
                                            <td>Ver Gasto</td>
                                            <td className="text-center d-flex justify-content-center">
                                                <h3 className="m-0 p-0">
                                                    <i className="me-3 bi bi-eye-fill m-0 p-0"></i>
                                                </h3>
                                                <h3 className="m-0 p-0">
                                                    <i className="me-3 bi bi-pencil-fill" id="editar"></i>
                                                </h3>
                                                <h3 className="m-0 p-0">
                                                    <i className="bi bi-trash-fill" id="borrar"></i>
                                                </h3>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="text-center">Basura</th>
                                            <td>Enero</td>
                                            <td>400</td>
                                            <td>Ver gasto</td>
                                            <td className="text-center d-flex justify-content-center">
                                                <h3 className="m-0 p-0">
                                                    <i className="me-3 bi bi-eye-fill m-0 p-0"></i>
                                                </h3>
                                                <h3 className="m-0 p-0">
                                                    <i className="me-3 bi bi-pencil-fill" id="editar"></i>
                                                </h3>
                                                <h3 className="m-0 p-0">
                                                    <i className="bi bi-trash-fill" id="borrar"></i>
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

            </div >



        </>
    )
}

export default ControlGastos
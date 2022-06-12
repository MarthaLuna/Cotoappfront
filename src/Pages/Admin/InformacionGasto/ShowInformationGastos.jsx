import React, { useState, useEffect } from 'react'

export const ShowInformationGastos = ({ _id, concepto, monto, fecha_gasto, comprobante, descripcion, imagen_mejora }) => {
    return (
        <>
            {/*  <section className="d-flex  w-100 m-5">
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
                            <Link to="/controlGastos">
                                <Button className='m-2' variant="dark">Cancelar <TiCancel /></Button>{' '}
                            </Link>
                        </div>


                    </div>


                </Container>
            </section> */}
            <div className="text-light">
                <div>{concepto}</div>
                {monto}
            </div>
        </>
    )
}

export default ShowInformationGastos 
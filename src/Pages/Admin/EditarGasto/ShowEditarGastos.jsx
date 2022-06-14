import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { AiOutlineSend } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai"
import { BsFillBackspaceFill } from "react-icons/bs"
import { TiCancel } from "react-icons/ti"
import { FiRepeat } from "react-icons/fi"
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

import Container from "react-bootstrap/Container";

export const ShowEditarGastos = ({ _id, concepto, monto, fecha_gasto, comprobante, descripcion, imagen_mejora }) => {
  return (
    <>
      <section className="d-flex  w-100 m-5">
        <div className="  w-100">
          <Container>
            <div className="mb-4 w-100 " style={{ color: "white" }}>
              <h2 className="position-absolute top- start-50 translate-middle ">
                Editar Gasto
              </h2>
            </div>
          </Container >
        </div>
      </section>
      <section>
        <Container className=" p-4 d-flex flex-row justify-content-center w-100">
          <div className="d-flex p-3">
            <div>
              <Card style={{ width: '18rem' }} className="mb-4">

                <Card.Body>

                  <button type="button" className="red-button ">
                    <span >
                      Adjuntar otra imagen    <Card.Img variant="top" src="imagen" />
                    </span>
                  </button>

                  <form>
                    <label>Concepto: </label>
                    <input type="text"
                      required
                    />
                  </form>

                  <form >
                    <label>Monto:</label>
                    <input type="text"
                      required
                    />
                  </form>


                  <form>
                    <label>Descripción </label>
                    <input type="text"
                      required
                    />
                  </form>
                  <Button variant="light"><FiRepeat /> Se repite <AiFillCheckSquare /></Button>
                </Card.Body>
              </Card>

              <button type="button" className="red-button ">
                <span >
                  Actualizar <AiOutlineSend />
                </span>
              </button>
            </div>
          </div>

          <div className=' d-flex p-3'>
            <div >
              <Card style={{ width: '18rem' }} className="mb-4" >
                <Card.Body >
                  <Card.Title className="d-flex justify-content-center" >Imagen adjunta</Card.Title>
                  <Card.Img variant="top" src="https://yt3.ggpht.com/ytc/AKedOLQjS5obkJNDJtK-RTYhTYrQVFgWzrn3s7RKNe64=s900-c-k-c0x00ffffff-no-rj" />
                </Card.Body>
              </Card>
              <Button className='m-2' variant="primary">Limpiar <BsFillBackspaceFill /></Button>{' '}
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

export default ShowEditarGastos
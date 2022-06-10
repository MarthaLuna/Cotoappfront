import React from 'react';
import {Tabla} from '../Tabla'
import './Reporte.scss'

export const Reporte =()=>{
    return(
    <section className="Body d-flex align-items-center justify-content-center w-100 mt-4">
      <div className="Body-Container h-100 d-flex align-items-center justify-content-center w-100">
        <Container className="Body-Content d-flex flex-column align-items-center justify-content-start w-100 p-0 m-0">
            <div id="Parte-Superior" className="mb-4 w-100 w-md-100 d-flex flex-column justify-content-around justify-content-md-between">
                <div id="Titulo-Reporte" style={{color:"white"}}>
                    <h2>
                        Reporte de entradas y salidas del mes actual
                    </h2>
                </div>

                <div id="Contenedor-Filtros" className="d-flex justify-content-between">
                    <div id="Reporte-Botones">
                        <button type="button" className="red-button me-3">
                            <span>
                            Mes Actual
                            </span>
                        </button>
                        <button type="button" className="red-button">
                            <span>
                            Año actual
                            </span>
                        </button>
                    </div>

                    <div id="Reporte-Filtros" className="d-flex">

                        <div className="btn-group me-3 d-none d-sm-inline">
                            <button type="button" class="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Mes del año actual
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <div className="btn-group d-none d-sm-inline">
                            <button type="button" class="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Año
                            </button>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                    </div>
                
                </div>

            </div>  

          <Tabla/>

        </Container>
      </div>
    </section>
    )
}
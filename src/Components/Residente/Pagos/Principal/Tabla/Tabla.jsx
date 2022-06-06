import React from 'react';
import './Tabla.scss';

export const Tabla =()=>
{
    return(
        <div className="w-100 d-none d-md-inline">
            <table id="tabla-pagos" className="table bg-white ">
            <thead>
                <tr>
                <th scope="col" className="text-center">Fecha</th>
                <th scope="col">Concepto</th>
                <th scope="col">Estado</th>
                <th scope="col">Monto</th>
                <th scope="col">Descripción</th>
                <th scope="col" className="text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row" className="text-center">03/06/2020</th>
                <td>Mtto</td>
                <td>Ok</td>
                <td>$500.00 mxn</td>
                <td>Descripción opcional es muy grande a ver que pasa si se pasan de lanza</td>
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
                <th scope="row" className="text-center">03/06/2020</th>
                <td>Mtto</td>
                <td>Ok</td>
                <td>$500.00 mxn</td>
                <td>Descripción opcional es muy grande a ver que pasa</td>
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
                <th scope="row" className="text-center">03/06/2020</th>
                <td>Mtto</td>
                <td>Ok</td>
                <td>$500.00 mxn</td>
                <td>Descripción opcional es muy grande a ver que pasa</td>
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

        <div className="w-100 d-md-none" style={{padding:"0px 0px 50px 0px"}}>
            <table id="tabla-pagos" className="table bg-white ">
            <thead>
                <tr>
                <th scope="col" className="text-center">Fecha</th>
                <th scope="col">Concepto</th>
                <th scope="col">Edo</th>
                <th scope="col" className="text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row" className="text-center">06/22</th>
                <td>Mtto</td>
                <td>Ok</td>
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
                <th scope="row" className="text-center">06/22</th>
                <td>Mtto</td>
                <td>Ok</td>
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
                <th scope="row" className="text-center">06/20</th>
                <td>Ultimo</td>
                <td>Ok</td>
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
    );
}
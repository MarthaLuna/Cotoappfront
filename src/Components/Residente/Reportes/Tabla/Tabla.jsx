import React from 'react';
import './Tabla.scss';

export const Tabla =()=>
{
    return(
        <>
            <div className="w-100 d-none d-md-inline">
              <table id="tabla-reporte" className="table bg-white ">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">Fecha</th>
                    <th scope="col">Concepto</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Monto</th>
                    <th scope="col">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="text-center">03/06/2020</th>
                    <td>Mtto</td>
                    <td>Entrada</td>
                    <td>$500.00 mxn</td>
                    <td>Descripción opcional es muy grande a ver que pasa si se pasan de lanza</td>
                    
                  </tr>
                  <tr>
                  <th scope="row" className="text-center">03/06/2020</th>
                    <td>Mtto</td>
                    <td>Salida</td>
                    <td>$500.00 mxn</td>
                    <td>Descripción opcional es muy grande a ver que pasa</td>
                    
                  </tr>
                  <tr>
                  <th scope="row" className="text-center">03/06/2020</th>
                    <td>Mtto</td>
                    <td>Salida</td>
                    <td>$500.00 mxn</td>
                    <td>Descripción opcional es muy grande a ver que pasa</td>
                    
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
                    <th scope="col">Tipo</th>
                    <th scope="col">Monto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="text-center">06/22</th>
                    <td>Mtto</td>
                    <td>Entrada</td>
                    <td>$500.00 mxn</td>
                  </tr>
                  <tr>
                  <th scope="row" className="text-center">06/22</th>
                    <td>Mtto</td>
                    <td>Salida</td>
                    <td>$500.00 mxn</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-center">06/22</th>
                    <td>Mtto</td>
                    <td>Salida</td>
                    <td>$500.00 mxn</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </>
    );
}
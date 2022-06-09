import React from 'react';
import './Principal.scss';

// import Main from './Registrar_Pago/Registrar_Pago';
import {Footer} from '../../Home/Footer';
import {Navbar} from '../Pagos/Principal/Navbar';
import {Reporte} from './Reporte';

export const Reportes =()=>
{
    return(
        <div id="Principal-Container">
            <Navbar/>
            <Reporte/>
            <Footer/>
        </div>
    );
}
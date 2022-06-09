import React from 'react';

import {Footer} from '../../../Home/Footer';
import {Navbar} from '../Principal/Navbar';
import {Formulario_VerPago} from './Formulario_VerPago';

export const Nuevo_Pago =()=>
{
    return(
        <div id="Principal-Container">
            <Navbar/>
            <Formulario_VerPago/>
            <Footer/>
        </div>
    );
}
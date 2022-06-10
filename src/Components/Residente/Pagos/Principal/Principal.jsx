import React from 'react';
import './Principal.scss';

import {Registrar_Pago} from './Registrar_Pago';
import {Footer} from '../../../Home/Footer';
import {Navbar} from './Navbar';

export const Principal =()=>
{
    return(
        <div id="Principal-Container">
            <Navbar/>
            <Registrar_Pago/>
            <Footer/>
        </div>
    );
}
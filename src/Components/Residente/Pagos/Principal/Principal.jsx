import React from 'react';
import './Principal.scss';
import Main from './Registrar_Pago/Registrar_Pago';

import {Footer} from '../../Home/Footer';
import {Navbar} from './Navbar';

export const Principal =()=>
{
    return(
        <div id="Principal-Container">
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    );
}
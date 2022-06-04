import React from 'react';
import './Principal.scss';

import {Footer} from '../../Home/Footer';
import {Navbar} from './Navbar';

export const Principal =()=>
{
    return(
        <div id="Principal-Container">
            <Navbar/>
            <Footer/>
        </div>
    );
}
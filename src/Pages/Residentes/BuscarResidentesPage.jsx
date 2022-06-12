import React from "react";


import {NavAdmin} from "../../Components/NavAdmin";

import {Footer} from "../../Components/Home/Footer";
import { ResidenteBuscar } from "../../Components/ResidenteBuscar";

export const BuscarResidentesPage=()=>
{
    return(
        <div id="Home-Container">
            <NavAdmin/>
            <ResidenteBuscar/>
            <Footer/>
        </div>
    );
}

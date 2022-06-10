import React from "react";

import {NavAdmin} from "../../Components/NavAdmin";

import {Footer} from "../../Components/Home/Footer";
import { ResidenteHome } from "../../Components/ResidenteHome";

export const ResidentesPage=()=>
{
    return(
        <div id="Home-Container">
            <NavAdmin/>
            <ResidenteHome/>
            <Footer/>
        </div>
    );
}
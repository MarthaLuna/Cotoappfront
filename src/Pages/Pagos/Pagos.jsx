import React from "react";

import {NavAdmin} from "../../Components/NavAdmin";

import {Footer} from "../../Components/Home/Footer";

export const AdminHome=()=>
{
    return(
        <div id="Home-Container">
            <NavAdmin/>
          
            <Footer/>
        </div>
    );
}
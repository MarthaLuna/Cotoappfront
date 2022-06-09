import React from "react";

import {NavAdmin} from "../../Components/NavAdmin";

import {Footer} from "../../Components/Home/Footer";

export const AdminHome=()=>
{
    return(
        <div id="Home-Container">
            <NavAdmin/>
            <img src={require("../../images/admin.png")} alt="admin"></img>
            <Footer/>
        </div>
    );
}
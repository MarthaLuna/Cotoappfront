import React from "react";
import "./Home.scss";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

export const Home=()=>
{
    return(
        <div id="Home-Container">
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    );
}
import React from "react";
import "./Home.scss";
import Navbar from "./Navbar/Navbar";
import Main from "./Main";
import Footer from "./Footer/Footer";

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
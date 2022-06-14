import React from "react";
import { NavAdmin } from "../../../Components/NavAdmin";
import { Footer } from "../../../Components/Home/Footer";
import GastoActualizar from "./GastoActualizar";


const GastosActualizarPage = () => {
    return (
        <div id="Home-Container">
            <NavAdmin />
            <GastoActualizar />
            <Footer />
        </div>
    )
}

export default GastosActualizarPage
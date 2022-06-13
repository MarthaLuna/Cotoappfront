import React from "react";

import { NavAdmin } from "../../Components/NavAdmin";

import { Footer } from "../../Components/Home/Footer";
import { PagoCrear } from "../../Components/PagoCrear/PagoCrear";

export const CreatePagosPage = () => {
  return (
    <div id="Home-Container">
      <NavAdmin />
      <PagoCrear />
      <Footer />
    </div>
  );
};

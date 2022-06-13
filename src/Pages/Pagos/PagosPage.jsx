import React from "react";

import { NavAdmin } from "../../Components/NavAdmin";

import { Footer } from "../../Components/Home/Footer";

import { PagoHome } from "../../Components/PagoHome";

export const PagosPage = () => {
  return (
    <div id="Home-Container">
      <NavAdmin />
      <PagoHome />
      <Footer />
    </div>
  );
};

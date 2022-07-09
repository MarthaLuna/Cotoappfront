import React from "react";

import { NavAdmin } from "../../../Components/NavAdmin";

import { Footer } from "../../../Components/Home/Footer";
import { ResidenteActualizar } from "../../../Components/ResidenteActualizar/ResidenteActualizar";

export const UpdateResidentesPage = () => {
  return (
    <div id="Home-Container">
      <NavAdmin />
      <ResidenteActualizar />
      <Footer />
    </div>
  );
};

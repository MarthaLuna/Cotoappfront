import React from "react";

import { NavAdmin } from "../../../Components/NavAdmin";

import { Footer } from "../../../Components/Home/Footer";
import { ResidenteCrear } from "../../../Components/ResidenteCrear/ResidenteCrear";

export const CreateResidentesPage = () => {
  return (
    <div className="bckGP">
      <NavAdmin />
      <ResidenteCrear />
      <Footer />
    </div>
  );
};

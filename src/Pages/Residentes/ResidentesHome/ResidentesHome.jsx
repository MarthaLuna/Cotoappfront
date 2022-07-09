import React from "react";

import { NavResidentes } from "../../../Components/NavResidentes";

import { Footer } from "../../../Components/Home/Footer";

export const ResidentesHome = () => {
  return (
    <div id="Home-Container">
      <NavResidentes />
      <div className="d-flex justify-content-center align-content-center"></div>
      <Footer />
    </div>
  );
};

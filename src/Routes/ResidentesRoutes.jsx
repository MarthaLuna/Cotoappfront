import React from "react";
import { Route, Routes } from "react-router-dom";

import { ResidentesHome } from "../Pages/Residentes/ResidentesHome/ResidentesHome";

export const ResidentesRoutes = () => {
  return (
    <Routes>
      <Route path="/ResidentesHome" element={<ResidentesHome />} />
    </Routes>
  );
};

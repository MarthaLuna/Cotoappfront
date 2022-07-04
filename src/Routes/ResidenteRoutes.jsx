import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../Pages/Login/LoginPage";
import { ReportesPage } from "../Pages/Reportes/ReportesPage";

export const ResidenteRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reportes" element={<ReportesPage />} />
    </Routes>
  );
};

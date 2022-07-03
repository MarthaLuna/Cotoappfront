import React from "react";
import { Route, Routes } from "react-router-dom";
import EditarGasto from "../Pages/Admin/EditarGasto/EditarGasto";
import RegistrarGasto from "../Pages/Admin/RegistrarGasto/RegistrarGasto";
import { HomePage } from "../Pages/Home/HomePage";
import { Reportes } from "../Components/Residente/Reportes";
import { BuscarResidentesPage } from "../Pages/Residentes/BuscarResidentesPage";
import { CreateResidentesPage } from "../Pages/Residentes/CreateResidentesPage";
import { UpdateResidentesPage } from "../Pages/Residentes/UpdateResidentesPage";
import { ResidentesPage } from "../Pages/Residentes/ResidentesPage";
import { BuscarPagosPage } from "../Pages/Pagos/BuscarPagosPage";
import { CreatePagosPage } from "../Pages/Pagos/CreatePagosPage";
import { UpdatePagosPage } from "../Pages/Pagos/UpdatePagosPage";
import { PagosPage } from "../Pages/Pagos/PagosPage";
import { RegisterAdmins } from "../Pages/RegisterAdmins/RegisterAdmins";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="/reportes" element={<Reportes />} />
      <Route path="/registrar-gasto" element={<RegistrarGasto />} />
      <Route path="/editar-gasto" element={<EditarGasto />} />

      <Route path="/pagos" element={<PagosPage />} />
      <Route path="/buscarPago" element={<BuscarPagosPage />} />
      <Route path="/crearPago" element={<CreatePagosPage />} />
      <Route path="/actualizarPago" element={<UpdatePagosPage />} />
      <Route path="/residentes" element={<ResidentesPage />} />
      <Route path="/buscarResidente" element={<BuscarResidentesPage />} />
      <Route path="/crearResidente" element={<CreateResidentesPage />} />
      <Route path="/actualizarResidente" element={<UpdateResidentesPage />} />
      <Route path="/registerAdmins" element={<RegisterAdmins />} />
    </Routes>
  );
};

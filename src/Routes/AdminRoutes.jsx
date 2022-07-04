import React from "react";
import { Route, Routes } from "react-router-dom";

import { ResidentesPage } from "../Pages/Residentes/ResidentesPage";
import { AdminHome } from "../Pages/Admin/AdminHome/AdminHome";
import { GastosPage } from "../Pages/Admin/GastosPage/GastosPage";
import ControlGastos from "../Pages/Admin/ControlGastos/ControlGastos";
import InformacionGasto from "../Pages/Admin/InformacionGasto/InformacionGasto";
import EditarGasto from "../Pages/Admin/EditarGasto/EditarGasto";
import GastosCrear from "../Pages/Admin/GastosCrear/GastosCrear";
import GastosActualizarPage from "../Pages/Admin/GastoActualizar/GastosActualizarPage";
import GastoBuscarPage from "../Pages/Admin/GastoBuscar/GastoBuscarPage";
import { BuscarResidentesPage } from "../Pages/Residentes/BuscarResidentesPage";
import { CreateResidentesPage } from "../Pages/Residentes/CreateResidentesPage";
import { UpdateResidentesPage } from "../Pages/Residentes/UpdateResidentesPage";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/residentes" element={<ResidentesPage />} />
      <Route path="/buscarResidente" element={<BuscarResidentesPage />} />
      <Route path="/crearResidente" element={<CreateResidentesPage />} />
      <Route path="/actualizarResidente" element={<UpdateResidentesPage />} />
      <Route path="/adminHome" element={<AdminHome />} />
      <Route path="/gastos" element={<GastosPage />} />
      <Route path="/controlGastos" element={<ControlGastos />} />
      <Route path="/informacion-gasto" element={<InformacionGasto />} />
      <Route path="/editar-gasto" element={<EditarGasto />} />
      <Route path="/GastosCrear" element={<GastosCrear />} />
      <Route path="/GastosActualizarPage" element={<GastosActualizarPage />} />
      <Route path="/GastoBuscarPage" element={<GastoBuscarPage />} />
    </Routes>
  );
};

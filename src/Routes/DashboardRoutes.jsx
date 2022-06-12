import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ControlGastos from '../Components/Admin/ControlGastos/ControlGastos';
import EditarGasto from '../Components/Admin/EditarGasto/EditarGasto';
import InformacionGasto from '../Components/Admin/InformacionGasto/InformacionGasto';
import RegistrarGasto from '../Components/Admin/RegistrarGasto/RegistrarGasto';
import { HomePage } from '../Pages/Home/HomePage';
import { BuscarResidentesPage } from '../Pages/Residentes/BuscarResidentesPage';
import { CreateResidentesPage } from '../Pages/Residentes/CreateResidentesPage';
import { ResidentesPage } from '../Pages/Residentes/ResidentesPage';


export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<HomePage />} />
      <Route path='/control-gastos' element={<ControlGastos />} />
      <Route path='/registrar-gasto' element={<RegistrarGasto />} />
      <Route path='/editar-gasto' element={<EditarGasto />} />
      <Route path='/informacion-gasto' element={<InformacionGasto />} />
      <Route path='/residentes' element={<ResidentesPage />} />
      <Route path='/buscarResidente' element={<BuscarResidentesPage />} />
      <Route path='/crearResidente' element={<CreateResidentesPage />} />

    </Routes>
  );
};
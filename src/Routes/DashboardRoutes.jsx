import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EditarGasto from '../Pages/Admin/EditarGasto/EditarGasto';
import RegistrarGasto from '../Pages/Admin/RegistrarGasto/RegistrarGasto';
import { HomePage } from '../Pages/Home/HomePage';
import { BuscarResidentesPage } from '../Pages/Residentes/BuscarResidentesPage';
import { CreateResidentesPage } from '../Pages/Residentes/CreateResidentesPage';
import { ResidentesPage } from '../Pages/Residentes/ResidentesPage';


export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<HomePage />} />
      <Route path='/registrar-gasto' element={<RegistrarGasto />} />
      <Route path='/editar-gasto' element={<EditarGasto />} />
      <Route path='/residentes' element={<ResidentesPage />} />
      <Route path='/buscarResidente' element={<BuscarResidentesPage />} />
      <Route path='/crearResidente' element={<CreateResidentesPage />} />

    </Routes>
  );
};
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EditarGasto from '../Pages/Admin/EditarGasto/EditarGasto';
import RegistrarGasto from '../Pages/Admin/RegistrarGasto/RegistrarGasto';
import { HomePage } from '../Pages/Home/HomePage';


export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<HomePage />} />
      <Route path='/registrar-gasto' element={<RegistrarGasto />} />
      <Route path='/editar-gasto' element={<EditarGasto />} />
    </Routes>
  );
};
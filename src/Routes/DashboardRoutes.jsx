import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ControlGastos from '../Pages/ControlGastos/ControlGastos';
import EditarGasto from '../Components/Admin/EditarGasto/EditarGasto';
import InformacionGasto from '../Components/Admin/InformacionGasto/InformacionGasto';
import RegistrarGasto from '../Components/Admin/RegistrarGasto/RegistrarGasto';
import { HomePage } from '../Pages/Home/HomePage';


export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<HomePage />} />
      <Route path='/registrar-gasto' element={<RegistrarGasto />} />
      <Route path='/editar-gasto' element={<EditarGasto />} />
      <Route path='/informacion-gasto' element={<InformacionGasto />} />
    </Routes>
  );
};
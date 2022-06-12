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
<<<<<<< HEAD
      <Route path='/informacion-gasto' element={<InformacionGasto />} />
      <Route path='/residentes' element={<ResidentesPage />} />
      <Route path='/buscarResidente' element={<BuscarResidentesPage />} />
      <Route path='/crearResidente' element={<CreateResidentesPage />} />

=======
>>>>>>> 59483c0b4b610397f21854a3deb9cfef6a3314e3
    </Routes>
  );
};
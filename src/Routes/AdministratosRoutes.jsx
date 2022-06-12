import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ResidentesPage } from '../Pages/Residentes/ResidentesPage';
import { AdminHome } from '../Pages/Admin/AdminHome/AdminHome';
import { GastosPage } from '../Pages/Admin/GastosPage/GastosPage';
import ControlGastos from '../Pages/Admin/ControlGastos/ControlGastos';


export const AdministratosRoutes = () => {
  return (
    <Routes>

      <Route path='/residentes' element={<ResidentesPage />} />

      <Route path='/adminHome' element={<AdminHome />} />
      <Route path='/gastos' element={< GastosPage />} />
      <Route path='/controlGastos' element={< ControlGastos />} />


    </Routes>
  );
};
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ResidentesPage } from '../Pages/Residentes/ResidentesPage';
import { AdminHome } from '../Pages/Admin/AdminHome/AdminHome';
import { GastosPage } from '../Pages/Admin/GastosPage/GastosPage';
import ControlGastos from '../Pages/Admin/ControlGastos/ControlGastos';
import InformacionGasto from '../Pages/Admin/InformacionGasto/InformacionGasto';
import EditarGasto from '../Pages/Admin/EditarGasto/EditarGasto';
import GastosCrear from '../Pages/Admin/GastosCrear/GastosCrear';
import GastosActualizarPage from '../Pages/Admin/GastoActualizar/GastosActualizarPage';

export const AdministratosRoutes = () => {
  return (
    <Routes>
      <Route path="/residentes" element={<ResidentesPage />} />
      <Route path='/residentes' element={<ResidentesPage />} />
      <Route path='/adminHome' element={<AdminHome />} />
      <Route path='/gastos' element={< GastosPage />} />
      <Route path='/controlGastos' element={< ControlGastos />} />
      <Route path='/informacion-gasto' element={<InformacionGasto />} />
      <Route path='/editar-gasto' element={<EditarGasto />} />
      <Route path='/GastosCrear' element={<GastosCrear />} />
      <Route path='/GastosActualizarPage' element={<GastosActualizarPage />} />

    </Routes>
  );
};

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../Pages/Login/LoginPage';
import { ReportesPage } from '../Pages/Reportes/ReportesPage';
import { AdminHome } from '../Pages/Admin/AdminHome/AdminHome';
import { GastosPage } from '../Pages/Admin/GastosPage/GastosPage';


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/reportes' element={<ReportesPage />} />
      <Route path='*' element={<LoginPage />} />
      <Route path='/adminHome' element={<AdminHome />} />
      <Route path='/gastos' element={<GastosPage />} />


    </Routes>
  );
};
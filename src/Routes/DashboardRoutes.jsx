import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../Pages/Home/HomePage';
import { ResidentesPage } from '../Pages/Residentes/ResidentesPage';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<HomePage />} />
      <Route path='residentes' element={<ResidentesPage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
};
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../Pages/Home/HomePage';


export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<HomePage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
};
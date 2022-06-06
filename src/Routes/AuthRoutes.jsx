import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../Pages/Login/LoginPage';
import { RegisterPage } from '../Pages/Register/RegisterPage';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='*' element={<LoginPage />} />
    </Routes>
  );
};
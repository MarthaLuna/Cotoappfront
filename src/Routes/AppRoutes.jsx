import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useHttp } from '../Hooks/useHttp';
import { validToken } from '../Services/AuthServies';
import { AuthRoutes } from './AuthRoutes';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRoutes = () => {
  const token = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loading, request, error, data } = useHttp(validToken, { token });

  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    if (data.success) {
      setIsLoggedIn(true);
    }
  }, [data]);

  if (loading) {
    return <div>Cargando</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/auth/*'
          element={
            <PublicRoutes isLoggedIn={isLoggedIn}>
              <AuthRoutes />
            </PublicRoutes>
          }
        />
        <Route
          path='/*'
          element={
            <PrivateRoutes isLoggedIn={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
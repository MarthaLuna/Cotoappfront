import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useHttp } from '../Hooks/useHttp';
import { validToken } from '../Services/AuthServies';
import { AuthRoutes } from './AuthRoutes';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { Home } from '../Components/Home/Home';
import useUser from '../Hooks/useUser';
import { UserContext } from '../context/UserContext';

export const AppRoutes = () => {
  const user = useUser();
  console.log(user);
  const token = localStorage.getItem('token');
  console.log(token)
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
    <UserContext.Provider value={token}>
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
          <Route
            path='/'
            element={

              <Home />

            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};
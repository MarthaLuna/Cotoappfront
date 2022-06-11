import React from 'react';
import { Navigate } from 'react-router-dom';

export const AdminRoutes = ({ children, isLoggedIn, isAdmin }) => {
  return (isLoggedIn) ? children : <Navigate to='/auth/login' />;
};
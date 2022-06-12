import React from 'react';
import { Navigate } from 'react-router-dom';

<<<<<<< HEAD
export const AdminRoutes = ({ children, isLoggedIn }) => {
  return (isLoggedIn )? children : <Navigate to='/auth/login' />;
=======
export const AdminRoutes = ({ children, isLoggedIn, isAdmin }) => {
  return (isLoggedIn) ? children : <Navigate to='/auth/login' />;
>>>>>>> 59483c0b4b610397f21854a3deb9cfef6a3314e3
};
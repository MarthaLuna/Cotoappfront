import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children, isLoggedIn }) => {
  console.log("public routes", isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/auth/login" />;
};

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const PrivateAdminRoutes = ({ children }) => {
  const [context] = useContext(UserContext);
  console.log(context);

  return context.permisos == "admin" ? children : <Navigate to="/auth/login" />;
};

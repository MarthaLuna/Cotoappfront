import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const PrivateResidentesRoutes = ({ children }) => {
  const [context] = useContext(UserContext);
  console.log(context);

  return context.permisos == "residente" ? (
    children
  ) : (
    <Navigate to="/auth/login" />
  );
};

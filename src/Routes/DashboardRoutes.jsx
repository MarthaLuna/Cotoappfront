import React from "react";
import { PrivateAdminRoutes } from "./PrivateAdminRoutes";
import { AdminRoutes } from "./AdminRoutes";
import { Route, Routes } from "react-router-dom";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin/*"
        element={
          <PrivateAdminRoutes>
            <AdminRoutes />
          </PrivateAdminRoutes>
        }
      />
    </Routes>
  );
};

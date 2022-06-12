import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useHttp } from "../Hooks/useHttp";
import { useHttpAdmin } from "../Hooks/useHttpAdmin";
import { validToken } from "../Services/AuthServies";
import { isAdmin } from "../Services/RoleServies";
import { AuthRoutes } from "./AuthRoutes";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { AdminRoutes } from "./AdminRoutes";
import { AdministratosRoutes } from "./AdministratosRoutes";
import { Home } from "../Components/Home/Home";
import useUser from "../Hooks/useUser";
import { UserContext } from "../context/UserContext";
import { ResidentesPage } from "../Pages/Residentes/ResidentesPage";

export const AppRoutes = () => {
  const user = useUser();
  console.log(user);
  const token = localStorage.getItem("token");
  let admin = false;
  console.log(token);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedAdminIn, setIsLoggedAdminIn] = useState(false);
  const { loading, request, error, data } = useHttp(validToken, { token });
  const { loadingAdmin, requestAdmin, errorAdmin, dataAdmin } = useHttpAdmin(
    isAdmin,
    { token }
  );

  useEffect(() => {
    request();
    requestAdmin();
  }, []);

  useEffect(() => {
    if (data.success) {
      setIsLoggedIn(true);
    }
  }, [data]);

  useEffect(() => {
    if (dataAdmin.success) {
      setIsLoggedAdminIn(true);
      admin = dataAdmin.success;
      console.log("isAdmin", admin);
    }
  }, [dataAdmin]);

  if (loading) {
    return <div>Cargando</div>;
  }

  return (
    <UserContext.Provider value={token}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/auth/*"
            element={
              <PublicRoutes isLoggedIn={isLoggedIn}>
                <AuthRoutes />
              </PublicRoutes>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoutes isLoggedIn={isLoggedIn}>
                <DashboardRoutes />
              </PrivateRoutes>
            }
          />
          <Route
            path="/admin/*"
            element={<AdministratosRoutes />
            }

          />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

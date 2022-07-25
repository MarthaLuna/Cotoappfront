import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useHttp } from "../Hooks/useHttp";
import { useHttpAdmin } from "../Hooks/useHttpAdmin";
import { validToken } from "../Services/AuthServies";
import { isAdmin } from "../Services/RoleServies";
import { PrivateRoutes } from "./PrivateRoutes";

import { LoginRoutes } from "./LoginRoutes ";
import { Home } from "../Components/Home/Home";

import { LoginPage } from "../Pages/Login/LoginPage";
import { DashboardRoutes } from "./DashboardRoutes";
import { UserContext } from "../context/UserContext";
import { RegisterAdmins } from "../Pages/RegisterAdmins/RegisterAdmins";

export const AppRoutes = () => {
  const [check, setCheck] = useState(true);
  const [context, setContext] = useContext(UserContext);

  const tokenLocal = localStorage.getItem("token");
  const roleLocal = localStorage.getItem("role");

  const { loading, request, error, data } = useHttp(validToken, {
    token: tokenLocal,
  });
  const { loadingAdmin, requestAdmin, errorAdmin, dataAdmin } = useHttpAdmin(
    isAdmin,
    { token: tokenLocal }
  );

  useEffect(() => {
    (async () => {
      if (!tokenLocal) {
        setCheck(false);
      } else {
        setCheck(true);

        await request();
        await requestAdmin();
        console.log(loading, loadingAdmin);
        if (!loading && !loadingAdmin) setCheck(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (data.success) {
      setContext((prevState) => ({
        ...prevState,
        permisos: roleLocal,
        isLoggedIn: true,
      }));
    }
  }, [data]);

  useEffect(() => {
    if (dataAdmin.success) {
      console.log("dataAdmin", dataAdmin);
      setContext((prevState) => ({
        ...prevState,
        permisos: "admin",
        isLoggedIn: true,
      }));
    }
  }, [dataAdmin]);

  if (check) {
    return <div>Cargando</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/dashboard/*"
          element={
            <PrivateRoutes>
              <DashboardRoutes />
            </PrivateRoutes>
          }
        />

        <Route
          exact
          path="/auth/*"
          element={
            <LoginRoutes>
              <LoginPage />
            </LoginRoutes>
          }
        />

        <Route path="/" element={<Home />} />
        <Route path="/adminRegister" element={<RegisterAdmins />} />
      </Routes>
    </BrowserRouter>
  );
};

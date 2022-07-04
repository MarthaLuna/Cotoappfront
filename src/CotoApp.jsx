import React, { useState } from "react";
import { UserContext } from "./context/UserContext";
import { AppRoutes } from "./Routes/AppRoutes";

export const CotoApp = () => {
  const [context, setContext] = useState({
    token: "",
    isLoggedIn: false,
    permisos: "",
  });
  return (
    <UserContext.Provider value={[context, setContext]}>
      <AppRoutes />
    </UserContext.Provider>
  );
};

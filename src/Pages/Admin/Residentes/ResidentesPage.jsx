import React, { useContext, useEffect } from "react";
import { Principal } from "../../../Components/Residente/Pagos/Principal";

import { NavAdmin } from "../../../Components/NavAdmin";

import { Footer } from "../../../Components/Home/Footer";

import { ResidenteHome } from "../../../Components/ResidenteHome";
import { UserContext } from "../../../context/UserContext";

export const ResidentesPage = () => {
  const [context, setContext] = useContext(UserContext);

  console.log("context", context);
  return (
    <div className="bckGP">
      <NavAdmin />
      <ResidenteHome />
      <Footer />
    </div>
  );
};

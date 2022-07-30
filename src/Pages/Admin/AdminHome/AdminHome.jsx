import React from "react";

import { NavAdmin } from "../../../Components/NavAdmin";

import { Footer } from "../../../Components/Home/Footer";
import "./AdminHome.scss";

export const AdminHome = () => {
  return (
    <div className="bckGP">
      <NavAdmin />
      <div className="d-flex justify-content-center align-content-center">
        <img
          src={require("../../../images/admin.png")}
          alt="admin"
          width="200px"
        ></img>
      </div>
      <Footer />
    </div>
  );
};

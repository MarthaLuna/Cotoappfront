import { useFormik } from "formik";
import React from "react";
import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Home/Footer";
import { RegisterAdminsShowPage } from "./RegisterAdminsShowPage";

export const RegisterAdmins = () => {
  return (
    <div>
      <Navbar />
      <RegisterAdminsShowPage />
      <Footer />
    </div>
  );
};

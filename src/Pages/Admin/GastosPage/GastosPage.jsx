import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavAdmin } from '../../../Components/NavAdmin';
import { Footer } from '../../../Components/Home/Footer';
import { useHttp } from '../../../Hooks/useHttp';
import { gastosRequest } from "./Services/ServiceGastos";
import { ShowGastos } from "./ShowGastos";



export const GastosPage = () => {

  const [gastos, setGastos] = useState([])
  const { loading, request, error, data } = useHttp(gastosRequest);

  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    if (Object.keys(data).length != 0) {
      setGastos(data.payload);
      // console.log(data.payload);
      // console.log(Object.keys(data.payload[0]).toString())
    }
  }, [data]);

  return (
    <>
      <div id="Home-Container">
        <NavAdmin />
        <div className="text-danger">
          {gastos.map((gasto) => (
            <ShowGastos key={gasto._id} {...gasto} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
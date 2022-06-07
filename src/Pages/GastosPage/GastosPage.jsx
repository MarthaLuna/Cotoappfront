import { useFormik } from 'formik';
import React, { useEffect } from 'react';

import {NavAdmin} from "../../Components/NavAdmin";

import {Footer} from "../../Components/Home/Footer";
import { useHttp } from "../../Hooks/useHttp";
import {gastosRequest} from "./Services/ServiceGastos";
import {ShowGastos} from "./ShowGastos";



export const GastosPage=()=>
{
  

    const { loading, request, error, data } = useHttp(gastosRequest);
    const data2 = [];
    useEffect(() => {
        request();
      }, []);

  useEffect(() => {
    
    if(Boolean(data)){
        console.log("entre1", data);
        if (data.success) {
     
            data2.push(...data.payload);
            console.log("entre", data);
           }
           else
           {
               console.log("entre2");
           }
    }
    
  }, [data]);

    console.log("data2",data2)
    const gastos = [];
    for(let i = 0; i < data2.length; i++)
    {
      console.log("data2 new", data2[i])
      gastos.push(<ShowGastos gasto={data2[i]}/>);
    }
    return(
        <>
        <div id="Home-Container">
            {/* <NavAdmin/> */}
            {console.log("data...",data2)}
            <div id="root">
           {
              gastos
             
            }
           </div>
            <Footer/>
        </div>
        </>
    );
}
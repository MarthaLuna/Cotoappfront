import React from "react";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import {NavAdmin} from "../../Components/NavAdmin";

import {Footer} from "../../Components/Home/Footer";
import { ResidenteBuscar } from "../../Components/ResidenteBuscar";
import { useEffect, useState } from 'react';
import { useHttp } from '../../Hooks/useHttp';
import {residentesBuscarRequest } from "./Services/Buscar";



export const BuscarResidentesPage=()=>
{
    const location = useLocation();
  const { name } = queryString.parse(location.search);
 console.log("name", name)
  

  const [residentes, setResidentes] = useState([])
  const { loading, request, error, data } = useHttp(residentesBuscarRequest, {
    nombre: name,
  });

  useEffect(() => {
    request();
  }, [name]);

  useEffect(() => {
    if (Object.keys(data).length != 0) {
      setResidentes(data.payload);
       console.log(data.payload);
       //console.log(Object.keys(data.payload[0]).toString())
    }
    else{
      console.log("no data")
    }
  }, [data]);



    return(
        <div id="Home-Container">
            <NavAdmin/>
            <div className="text-danger">
          {residentes.map((residente) => (
           <ResidenteBuscar key={residente._id} {...residentes} />
          ))}
        </div>
            
            <Footer/>
        </div>
    );
}

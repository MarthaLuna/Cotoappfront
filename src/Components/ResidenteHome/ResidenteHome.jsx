import React from "react";

import "./ResidenteHome.scss";
import useUser from "../../Hooks/useUser";

export const ResidenteHome =()=>{
   
        return(
         <div className="residenteHomeConteiner"> 
                 <div className="residenteHomeCont">
                         <div className="residenteHomeContent d-flex justify-content-around">
                                 <div className="d-flex gap-3">
                                 <input type="text" placeholder="Ingresa nombre residente"></input>
                                 <a className="btn btn-outline-light btn-residente" href="/buscarResidente" >
                    Buscar
                    </a>
                    </div>
                    <a className="btn btn-outline-light btn-residente" href="/crearResidente" >
                    Crear Residente
                    </a>
                         </div>
                 </div>
         </div>
        );
    
   
}
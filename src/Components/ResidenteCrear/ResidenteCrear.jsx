import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../Hooks/useHttp';
import { crearRRequest } from './Services/CrearResidenteService';


import "./ResidenteCrear.scss";


import "./ResidenteCrear.scss";
import useUser from "../../Hooks/useUser";

export const ResidenteCrear =()=>{

        const navigate = useNavigate();

        const { handleSubmit, handleChange, values, errors, handleReset } = useFormik({
          initialValues: {
            nombre: '',
            numCasa: '',
            email: '',
            telefono: '',
          },
          validate: (values) => {
            const errors = {};
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Email no es valido';
            }
            return errors;
          },
          onSubmit: () => request(),
          onReset: () => { const source = document.getElementById("source");
          source.innerText = ""}
          
       
          
        });
      
        const { loading, request, error, data } = useHttp(crearRRequest, {
          nombre: values.nombre,
          numCasa: values.numCasa,
          email: values.email,
          telefono: values.telefono,
        });
      
       
        useEffect(() => {
          if (data.success) {
          
            
            navigate('.');
            const source = document.getElementById("source");
        source.innerText = "Residente creado exitosamente"
          }
          else if (data.success == false)
          {
                navigate('.');
                const source = document.getElementById("source");
                source.innerText = "Residente no se pudo crear"

          }
          else{

            const source = document.getElementById("source");
          source.innerText = ""
          }
        }, [data]);
   
        return(
       
                         <div className='ResidenteCMain'>
    <div className='ResidenteCContainer'>
    <div className='ResidenteCContent'>
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          
        }}
      >
              <div className='field'>
        <span>Nombre: </span>
        <input
          type='nombre'
          value={values.nombre}
          onChange={handleChange}
          name='nombre'
          
        ></input>
        </div>
        <div className='field'>
        <span>No. Casa: </span>
        <input
          type='numCasa'
          value={values.numCasa}
          onChange={handleChange}
          name='numCasa'
          
        ></input>
        </div>
        <div className='field'>
         <span>Email: </span>
        <input
          type='email'
          value={values.email}
          onChange={handleChange}
          name='email'
          
        ></input>
        </div>
        {errors.email && <span> Ingresa un email valido</span>}
        <div className='field'>
        <span>Telefono: </span>
        <input
          type='telefono'
          value={values.telefono}
          onChange={handleChange}
          name='telefono'
          
        ></input>
        </div>
        <div className='botones_f'>
        <button id='button_limpiar'  type="reset" >Limpiar</button>
        
        <button id='button_enviar' type='submit'>Enviar</button>
        </div>
        <div id="source">

        </div>
      </form>
    </div>
    </div>
    </div>
              
        );
    
   
}
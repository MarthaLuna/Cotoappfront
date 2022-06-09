import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../Hooks/useHttp';
import { loginRequest } from './Services/LoginService';

import {Navbar} from "../../Components/Home/Navbar";
import {Footer} from "../../Components/Home/Footer";
import "./Login.scss";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors = {};
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email no es valido';
      }
      return errors;
    },
    onSubmit: () => request(),
  });

  const { loading, request, error, data } = useHttp(loginRequest, {
    email: values.email,
    password: values.password,
  });

 
  useEffect(() => {
    if (data.success) {
      localStorage.setItem('token', data.payload);
    
      navigate('/');
    }
  }, [data]);

  return (
   <>
   <div id='Home-Container'>
    <Navbar/>
    <div className='LoginMain'>
    <div className='LoginContainer'>
    <div className='LoginContent'>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          
        }}
      >
        <span>User</span>
        <input
          type='email'
          value={values.email}
          onChange={handleChange}
          name='email'
          
        ></input>
        {errors.email && <span> Ingresa un email valdio</span>}
        <span>Password</span>
        <input
          type='password'
          value={values.password}
          onChange={handleChange}
          name='password'
          
        ></input>
        <button id='button_login' type='submit'>Login</button>
      </form>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
    </>
    
   
  );
};

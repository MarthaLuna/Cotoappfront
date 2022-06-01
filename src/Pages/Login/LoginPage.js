import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import useHttp from '../../Hooks/useHttp'
import loginRequest from './Services/LoginService'


const LoginPage = () => {
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
        <div style={{ width: '100%', height: '100vh' }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%',
                    height: '50%',
                }}
            >
                <input
                    type='email'
                    value={values.email}
                    onChange={handleChange}
                    name='email'
                    placeholder='email'
                ></input>
                {errors.email && <span> Ingresa un email valdio</span>}
                <input
                    type='password'
                    value={values.password}
                    onChange={handleChange}
                    name='password'
                    placeholder='password'
                ></input>
                <button type='submit'>login</button>
            </form>
        </div>
    );
};
export default LoginPage
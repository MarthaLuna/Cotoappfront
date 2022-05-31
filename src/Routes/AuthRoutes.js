import React from 'react'
import LoginPage from '../Pages/Login/LoginPage'
import RegisterPage from '../Pages/Register/RegisterPage'
import { Routes, Route } from 'react-router-dom'

function AuthRoutes() {
    return (
        <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='*' element={<LoginPage />} />
        </Routes>
    )
}
export default AuthRoutes

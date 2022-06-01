import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import DashboardRoutes from './DashboardRoutes'
import PublicRoutes from './PublicRoutes'
import AuthRoutes from './AuthRoutes'
import validToken from '../Services/AuthServies'
import useHttp from '../Hooks/useHttp'

const AppRoutes = () => {
    const token = localStorage.getItem('token')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { loading, request, err, data } = useHttp(validToken, { token })
    useEffect(() => {
        request()
    }, [])
    if (loading) {
        <div>cargando</div>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/auth/*'
                    element={<PublicRoutes isLoggedIn={isLoggedIn}>
                        <AuthRoutes />
                    </  PublicRoutes>
                    }
                />
                <Route
                    path='/*'
                    element={
                        <PrivateRoutes isLoggedIn={isLoggedIn}>
                            <DashboardRoutes />
                        </PrivateRoutes>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import DashboardRoutes from './DashboardRoutes'
import PublicRoutes from './PublicRoutes'
import AuthRoutes from './AuthRoutes'

const AppRoutes = () => {
    const isLoggedIn = false
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
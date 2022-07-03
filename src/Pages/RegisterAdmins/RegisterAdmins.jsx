import { useFormik } from 'formik'
import React from 'react'
import { NavAdmin } from '../../Components/NavAdmin'
import { Footer } from '../../Components/Home/Footer'
import { RegisterAdminsShowPage } from './RegisterAdminsShowPage'

export const RegisterAdmins = () => {

    return (
        <div>
            <NavAdmin />
            <RegisterAdminsShowPage />
            <h1>RegisterAdmins now show page</h1>
            <Footer />


        </div>
    )
}

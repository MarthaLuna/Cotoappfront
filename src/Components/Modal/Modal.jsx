import React from 'react'
import './Modal.css'

const Modal = ({ closeModal }) => {

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='title'>
                    <h2>¿Seguro que quieres eliminar el elemento eleccionado? </h2>
                </div>
                <div className='body'>
                    <p>la siguiente pagina es buena, sigue </p>
                </div>
                <div className='footer'>
                    <button id="cancelBtn">Eliminar</button>
                    <button onClick={() => closeModal(false)} >Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
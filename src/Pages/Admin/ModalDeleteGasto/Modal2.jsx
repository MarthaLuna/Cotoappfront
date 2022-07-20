import React from 'react'
import axios from "axios";
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '50px',
    zIndex: '1000',

}
const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: '1000',
}

const Modal2 = ({ open, onClose, onFunction }) => {
    if (!open) return null;
    return (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <h3>¿Está Seguro que Desea Eliminar este Gasto?</h3>
                <div style={{ display: "flex", alignItems: "center", color: "white" }}>

                    <button onClick={onFunction} style={{ background: "salmon", marginLeft: "60px", border: "none" }} type="button" className="btn btn-primary">Eliminar</button>
                    <button onClick={onClose} style={{ background: "grey", margin: "20px", border: "none" }} type="button" className="btn btn-secondary">Cerrar</button>
                </div>
            </div>
        </>
    )
}

export default Modal2
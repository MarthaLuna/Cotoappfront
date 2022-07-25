import React from 'react'

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
const ModalDeleteGasto = ({ children, onDialog }) => {
    return (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>

                <h3>{children}</h3>

                <div style={{ display: "flex", alignItems: "center", color: "white" }}>
                    <button onClick={() => onDialog(false)} style={{ background: "grey", margin: "20px", border: "none" }} type="button" className="btn btn-secondary" >Cerrar</button>
                    <button onClick={() => onDialog(true)} style={{ background: "salmon", marginLeft: "60px", border: "none" }} type="button" className="btn btn-primary">Eliminar</button>
                </div>
            </div>
        </>
    )
}

export default ModalDeleteGasto

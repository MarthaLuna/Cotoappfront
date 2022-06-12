import React from 'react';
export const ShowGastos = ({ _id, concepto, monto, fecha_gasto, comprobante, descripcion, imagen_mejora }) => {

    return (
        <div className="text-light">
            <div>{concepto}</div>
            {monto}
            {descripcion}

        </div>
    );
}
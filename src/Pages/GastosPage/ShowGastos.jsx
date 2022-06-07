import React from 'react';
export const ShowGastos = ({gasto}) =>
{
    console.log(gasto)
    return(
        <div className="text-light" key={gasto._id}>
           fgfgf  {gasto.concepto}
        </div>
    );
}
import React from "react";

import "./ResidenteBuscar.scss";

export const ResidenteBuscar = ({
  _id,
  nombre,
  email,
  casa,
  telefono,
  user,
  permisos,
}) => {
  console.log({ nombre }, { _id });
  return (
    <tr>
      <td>{nombre}</td>
      <td>{casa}</td>
      <td>{email}</td>
      <td>{telefono}</td>
    </tr>
  );
};

import React, { useState } from 'react';

export const useHttpAdmin = (requestFunction, params = {}) => {
  const [loadingAdmin, setLoadingAdmin] = useState(false);
  const [errorAdmin, setErrorAdmin] = useState(null);
  const [dataAdmin, setDataAdmin] = useState({});

  const requestAdmin = async () => {
    setLoadingAdmin(true);
    setErrorAdmin(null);
    try {
      const response = await requestFunction(params);
      setLoadingAdmin(false);
      setDataAdmin(response);
    } catch (error) {
      setLoadingAdmin(false);
      setErrorAdmin(error);
    }
  };

  return { loadingAdmin, requestAdmin, errorAdmin, dataAdmin };
};
import React, { useState } from "react";

export const useHttp = (requestFunction, params = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const request = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await requestFunction(params);
      setLoading(false);
      setData(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return { loading, request, error, data };
};

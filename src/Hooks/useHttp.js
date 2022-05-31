import React, { useState } from 'react'

const useHttp = (requestFunction, params = {}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null)
    const request = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await requestFunction(params)
            setLoading(false)
            setData(response)
            return response
        } catch (err) {
            setLoading(false)
            setError(err)
        }

    }
    return {
        loading, request, err, data
    }
}

export default useHttp
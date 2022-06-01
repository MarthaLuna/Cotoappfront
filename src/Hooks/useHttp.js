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
        } catch (error) {
            setLoading(false)
            setError(error)
        }

    }
    return {
        loading, request, error, data
    }
}

export default useHttp
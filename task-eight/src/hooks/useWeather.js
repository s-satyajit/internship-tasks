import React, {useEffect, useState} from "react";

const useWeather = (query) => {

    const [weatherData, setWeatherData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://api.weatherbit.io/v2.0/current`, {
                    method: GET,
                    headers: {
                        apiKey: "bea3f1dbdacd4892a96c0d8816f2419d"
                    }
                })
                const data = await response.json()
                setWeather(data || [])
            } catch(error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchWeather()
    }, [query])

    return {weatherData, loading, error}
}

export default useWeather;
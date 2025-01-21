import React from "react";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import useWeather from "../hooks/useWeather";

const WeatherPage = () => {

    const {weather} = useContext(WeatherContext)

    const { weatherData, loading, error } = useWeather()

    return (
        <>
        
        </>
    )
}

export default WeatherPage;
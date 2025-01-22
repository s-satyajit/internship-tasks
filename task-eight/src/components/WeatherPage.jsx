import React, { useEffect } from "react";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import useWeather from "../hooks/useWeather";

const WeatherPage = () => {
  const { setWeather } = useContext(WeatherContext);

  const { weatherData, loading, error } = useWeather("London");

  useEffect(() => {
    if(weatherData && weatherData.data)
        setWeather(weatherData.data)
  }, [])

  return (
    <>

    {loading && <p>Loading Weather Data...</p>}

    {error && <p>Error: {error}</p>}

      <div>
        {weatherData?.data ? (
            <div>
                <p>City: {weatherData.data[0].city_name}</p>
            </div>
        ) : (
            <p>No weather data available</p>
        )}
      </div>
    </>
  );
};

export default WeatherPage;

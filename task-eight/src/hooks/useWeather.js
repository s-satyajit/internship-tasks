import React, { useEffect, useState } from "react";

const useWeather = (query) => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherbit.io/v2.0/current?city=${query}&key=bea3f1dbdacd4892a96c0d8816f2419d`
        );

        if (!response.ok)
          throw new Error(`HTTPS error! status: ${response.status}`);

        const data = await response.json();
        setWeatherData(data);
        console.log(data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchWeather();
  }, [query]);

  return { weatherData, loading, error };
};

export default useWeather;

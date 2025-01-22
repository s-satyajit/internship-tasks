import React, { useEffect, useState } from "react";

const useCity = (query) => {

    const [cityNames, setCityNames] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          `http://api.geonames.org/citiesJSON?lang=EN&south=6.462&north=37.083&east=97.395&west=68.176&username=satyajit1234`
        );

        if(!response.ok)
            throw new Error(`HTTPS Error! Status: ${response.status}`)

        const data = await response.json()
        console.log(data)
        setCityNames(data.geonames.map((city) => city.name) || [])
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    };
    if (query) fetchCities()
  }, [query]);

  return {cityNames, error, loading};
};

export default useCity;

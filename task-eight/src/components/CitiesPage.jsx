import React, { useState, useRef } from "react";
import useCity from "../hooks/useCity";

const CitiesPage = () => {
    const [query, setQuery] = useState("")
    const {cityNames, error, loading} = useCity(query)

    const handleSearch = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
    }

    return (
        <>
            <h1>Search Cities</h1>
            
            {loading && <p>Loading....</p>}
            {error && <p>Error: {error}</p>}
            
            <ul>
                {cityNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </>
    )
}

export default CitiesPage;
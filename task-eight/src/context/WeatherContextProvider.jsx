import React, {useState} from "react";
import { useContext } from "react";
import WeatherContext from "./WeatherContext";

const WeatherContextProvider = ({children}) => {
    const [weather, setWeather] = useState(null)

    return (
        <WeatherContext.Provider value={{weather, setWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider;
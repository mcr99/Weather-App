import { Children, createContext, useContext, useState } from "react";

const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
    const [unit, setUnit] = useState("C")
    const toFahrenheit = (celsius) => Math.round((celsius * 9/5) + 32)
    const toCelsius = (f) => Math.round(f)

    const convert = (temp) => {
        return unit === "C" ? Math.round(temp) : toFahrenheit(temp)
    }
    return (
        <WeatherContext.Provider value={{unit, setUnit, convert}}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = () => {
    const context = useContext(WeatherContext)
    return context
}
import { useEffect, useState } from "react"
import { useWeather } from "../context/useWeatherContext"

function WeatherNextDays () {
    const {unit, setUnit, convert} = useWeather()
    const [forecast, setForecast ] = useState([])
    const [loading, setLoading] = useState(false)
    const IPINFO_TOKEN = import.meta.env.VITE_IPINFO_TOKEN 
    const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY 

    useEffect(()=> {
        async function fetchForecast (){
            setLoading(true)
            try{
                const ipInfoAnswer = await fetch(`https://ipinfo.io/json?token=${IPINFO_TOKEN}`)
                const location = await ipInfoAnswer.json()
                const [latitude, longitude] = location.loc.split(",")
                const weatherAnswer =  await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric&lang=es`
                )
                const weatherData = await weatherAnswer.json()
                const dailyMap = {}
                weatherData.list.forEach((reading) =>{
                    const date = reading.dt_txt.split(" ")[0]

                    if (!dailyMap[date]) {
                        dailyMap[date] = {
                            dt: reading.dt,
                            temp_max: reading.main.temp_max,
                            temp_min: reading.main.temp_min,
                            icon: reading.weather[0].icon,
                        }
                    }else {
                        if (reading.main.temp_max > dailyMap[date].temp_max) {
                            dailyMap[date].temp_max = reading.main.temp_max
                            dailyMap[date].icon = reading.weather[0].icon
                        }
                        if(reading.main.temp_min < dailyMap[date].temp_min) {
                            dailyMap[date].temp_min = reading.main.temp_min
                        }
                    }
                })
                    const finalForecast = Object.values(dailyMap).slice(0,5)
                    setForecast(finalForecast)
                    setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }}
        fetchForecast()
    },[])


    if (loading || !forecast)  {
        return(
            <>cargando...</>
        )
    }

    return(
        <section className=" py-10 px-5 w-full">
            <div className="flex justify-end items-center gap-5">
                <button className={`${unit === "C" ? "bg-textlight/80 dark:bg-texttdark dark:text-secdark text-seclight" : "bg-textlight/40 dark:bg-texttdark/30"}  px-3.5 py-2.5 rounded-full font-bold `} onClick={()=> setUnit("C")}>°C</button>
                <button className={`${unit === "F" ? "bg-textlight/80 dark:bg-texttdark dark:text-secdark text-seclight" : "bg-textlight/40 dark:bg-texttdark/30"}  px-4 py-2.5 rounded-full font-bold`} onClick={()=> setUnit("F")}>°F</button>
            </div>
            <article className=" my-10 gap-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-textlight items-center justify-center">
                {forecast.map((day, index) => {
                    const date = new Date(day.dt * 1000).toLocaleDateString("es-ES", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                    })
                    const displayMax = convert(day.temp_max)
                    const displayMin = convert(day.temp_min)
                    return(
                        <div className="bg-bglight  dark:bg-secdark flex flex-col items-center justify-center p-5 gap-2 h-45" key={day.dt}>
                            <p className="font-bold dark:text-texttdark">{index === 0 ? "Mañana" : date}</p>
                            <img src={`/images/weather/${day.icon}.png`} alt="weather" className="w-20"/>
                            <div className="flex gap-3">
                                <p className="font-bold dark:text-texttdark"><span>{displayMax}</span>°{unit}</p>
                                <p className="font-bold dark:text-texttdark/70"><span>{displayMin}</span>°{unit}</p>
                            </div>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}

export default WeatherNextDays
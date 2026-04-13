import { useEffect, useState } from "react"

function WeatherNextDays () {
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
                const dailyData = weatherData.list.filter(reading => reading.dt_txt.includes("12:00:00"))
                setForecast(dailyData)
                setLoading(false)
            }catch(error) {
                console.log(error)
                setLoading(false)
            }
        }
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
                <button className="bg-textlight/80 dark:bg-texttdark dark:text-secdark text-seclight px-3.5 py-2.5 rounded-full font-bold ">°C</button>
                <button className="bg-textlight/40 dark:bg-texttdark/30 dark:text-texttdark px-4 py-2.5 rounded-full font-bold">°F</button>
            </div>
            <article className=" my-10 gap-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-textlight items-center justify-center">
                {forecast.map((day, index) => {
                    const date = new Date(day.dt * 1000).toLocaleDateString("es-ES", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                    })
                    return(
                        <div className="bg-bglight  dark:bg-secdark flex flex-col items-center justify-center p-5 gap-2 h-45" key={day.dt}>
                            <p className="font-bold dark:text-texttdark">{index === 0 ? "Mañana" : date}</p>
                            <img src={`/images/weather/${day.weather[0].icon}.png`} alt="weather" className="w-20"/>
                            <div className="flex gap-3">
                                <p className="font-bold dark:text-texttdark"><span>{Math.round(day.main.temp_max)}</span>°C</p>
                                <p className="font-bold dark:text-texttdark/70"><span>{Math.round(day.main.temp_min)}</span>°C</p>
                            </div>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}

export default WeatherNextDays
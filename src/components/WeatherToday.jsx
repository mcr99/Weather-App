import { useEffect, useState } from "react"

function WeatherToday () {
    function toggleDarkMode (){
        document.documentElement.classList.toggle("dark")
    }
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const IPINFO_TOKEN = import.meta.env.VITE_IPINFO_TOKEN 
    const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY 

    useEffect(()=> {
        async function fetchAllData() {
        setLoading(true)
        try{
            const ipInfoAnswer = await fetch(`https://ipinfo.io/json?token=${IPINFO_TOKEN}`)
            const location = await ipInfoAnswer.json()
            const [latitude, longitude] = location.loc.split(",")
            const weatherAnswer =  await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric&lang=es`
            )
            const weatherData = await weatherAnswer.json()
            setData(weatherData)
            setLoading(false)
        }catch (error){
            console.log(error)
        }
        }
        fetchAllData()
    }, [])

    const today = data 
        ? new Date(data.dt *1000).toLocaleDateString("es-ES", {
        day: "numeric", month: "short"}) : ""

    if (loading || !data)  {
        return(
            <>cargando</>
        )
    }

    return(
        <aside className="flex flex-col gap-10 bg-bglight dark:bg-secdark/95 md:w-[40%]  xl:h-screen">
            {console.log(data)}
            <div className="bg-[url('/images/others/Cloud-background.png')] bg-center bg-no-repeat flex flex-col items-center justify-center h-[50%]">
            <header className="w-full flex items-center justify-between p-5">
                <button className="bg-button text-textlight dark:text-texttdark font-semibold px-4 py-2 rounded-xs hover:ring-1 ring-white">Search for Places</button>
                <div className="flex gap-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  className="w-11 p-2 bg-button rounded-full fill-texttdark hover:fill-white hover:ring-1 ring-white">
                        <path d="M444-22v-82q-139-15-232.5-108T103-444H21v-73h82q15-139 108.5-232.5T444-859v-82h73v82q138 16 231.5 109.5T858-517h82v73h-82q-16 139-109.5 232T517-104v82h-73Zm37-154q126 0 215.5-89T786-481q0-127-89.5-216.5T481-787q-127 0-216.5 89.5T175-481q0 127 89.5 216T481-176Zm0-141q-69 0-116.5-47.5T317-481q0-69 47.5-116.5T481-645q68 0 116 47.5T645-481q0 69-48 116.5T481-317Z"/>
                    </svg>
                    <div onClick={toggleDarkMode}>
                        <svg viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg" className="w-11 p-2 bg-button rounded-full fill-texttdark hidden dark:block hover:fill-white hover:ring-1 ring-white">
                            <path d="M12 2.625C12.4142 2.625 12.75 2.96079 12.75 3.375V4.875C12.75 5.28921 12.4142 5.625 12 5.625C11.5858 5.625 11.25 5.28921 11.25 4.875V3.375C11.25 2.96079 11.5858 2.625 12 2.625Z" />
                            <path d="M6.5 12.625C6.5 9.58743 8.96243 7.125 12 7.125C15.0376 7.125 17.5 9.58743 17.5 12.625C17.5 15.6626 15.0376 18.125 12 18.125C8.96243 18.125 6.5 15.6626 6.5 12.625Z" />
                            <path d="M19.0713 6.61627C19.3642 6.32337 19.3642 5.8485 19.0713 5.55561C18.7785 5.26271 18.3036 5.26271 18.0107 5.55561L16.95 6.61627C16.6571 6.90916 16.6571 7.38403 16.95 7.67693C17.2429 7.96982 17.7178 7.96982 18.0107 7.67693L19.0713 6.61627Z" />
                            <path d="M22 12.625C22 13.0392 21.6642 13.375 21.25 13.375H19.75C19.3358 13.375 19 13.0392 19 12.625C19 12.2108 19.3358 11.875 19.75 11.875H21.25C21.6642 11.875 22 12.2108 22 12.625Z" />
                            <path d="M18.0107 19.6944C18.3036 19.9873 18.7785 19.9873 19.0713 19.6944C19.3642 19.4015 19.3642 18.9266 19.0713 18.6337L18.0107 17.5731C17.7178 17.2802 17.2429 17.2802 16.95 17.5731C16.6571 17.866 16.6571 18.3408 16.95 18.6337L18.0107 19.6944Z" />
                            <path d="M12 19.625C12.4142 19.625 12.75 19.9608 12.75 20.375V21.875C12.75 22.2892 12.4142 22.625 12 22.625C11.5858 22.625 11.25 22.2892 11.25 21.875V20.375C11.25 19.9608 11.5858 19.625 12 19.625Z"/>
                            <path d="M7.04986 18.6397C7.34275 18.3468 7.34275 17.8719 7.04986 17.579C6.75697 17.2862 6.28209 17.2862 5.9892 17.579L4.92854 18.6397C4.63565 18.9326 4.63565 19.4075 4.92854 19.7004C5.22143 19.9933 5.69631 19.9933 5.9892 19.7004L7.04986 18.6397Z" />
                            <path d="M5 12.625C5 13.0392 4.66421 13.375 4.25 13.375H2.75C2.33579 13.375 2 13.0392 2 12.625C2 12.2108 2.33579 11.875 2.75 11.875H4.25C4.66421 11.875 5 12.2108 5 12.625Z"/>
                            <path d="M5.9892 7.67096C6.28209 7.96385 6.75697 7.96385 7.04986 7.67096C7.34275 7.37806 7.34275 6.90319 7.04986 6.6103L5.9892 5.54963C5.69631 5.25674 5.22143 5.25674 4.92854 5.54963C4.63565 5.84253 4.63565 6.3174 4.92854 6.61029L5.9892 7.67096Z" />
                        </svg>
                        <svg viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg" className="w-11 p-2 bg-button hover:ring-1 ring-white rounded-full fill-texttdark  dark:hidden hover:fill-white">
                            <path d="M14.5548 2.45451C14.232 2.36944 13.8918 2.50796 13.7203 2.79431C13.5487 3.08067 13.5871 3.44595 13.8144 3.69042C15.0185 4.98559 15.7539 6.71956 15.7539 8.62696C15.7539 12.6321 12.5071 15.8789 8.50196 15.8789C6.59455 15.8789 4.86059 15.1435 3.56542 13.9394C3.32095 13.7121 2.95567 13.6737 2.66931 13.8453C2.38296 14.0168 2.24444 14.357 2.32951 14.6798C3.45868 18.9646 7.3593 22.125 12 22.125C17.5229 22.125 22 17.6479 22 12.125C22 7.48431 18.8396 3.58368 14.5548 2.45451Z"/>
                        </svg>
                    </div>
                </div>
            </header>
            <img src={`/images/weather/${data.weather[0].icon}.png`} alt="weather icon"  className="w-40 my-20"/>
            </div>
            <section className="flex flex-col justify-center items-center gap-15 pb-20">
                <p className="text-6xl font-bold text-textlight dark:text-texttdark"><span className="text-8xl">{data.main.temp}</span> °C</p>
                <ul className="flex flex-col gap-5 items-center justify-center">
                    <li className="text-2xl font-bold text-textlight dark:text-texttdark/60">{data.weather[0].description}</li>
                    <li className="text-lg font-bold text-textlight dark:text-texttdark/60">Today .{today}</li>
                    <li className="flex font-bold text-textlight dark:text-texttdark/60">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="fill-textlight w-6">
                            <path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                        </svg>
                        <span>{data.name}</span>
                    </li>
                </ul>
            </section>
        </aside>
    )
}

export default WeatherToday
import WeatherNextDays from "../components/WeatherNextDays"
import WeatherToday from "../components/WeatherToday"
import WeatherHightlights from "../components/WeatherHightlights"


function Home () {
    return(
        <div className="md:flex justify-between">
            <WeatherToday/>
            <main className="lg:flex flex-col items-center justify-center md:w-[60%]">
                <WeatherNextDays/>
                <WeatherHightlights/>
            </main>
        </div>
    )
}

export default Home
import { WeatherProvider } from "./context/useWeatherContext"
import Home from "./pages/Home"


function App() {

  return (
    <>
      <WeatherProvider>
        <Home/>
      </WeatherProvider>
    </>
  )
}

export default App

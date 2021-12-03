import { useEffect } from "react"
import "./App.css"
import CitySearch from "./Components/CitySearch/CitySearch"
import Header from "./Components/Header/Header"
import WeatherResult from "./Components/WeatherResult/WeatherResult"
import { useDispatch } from "react-redux"
import { getForecastByLatLon, getCurrentWeather } from "./api/getWeather"
import { updateWeatherResult, updateLoading } from "./redux/weatherResult"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        const getWeather = (lat, lon) => async (dispatch) => {
            dispatch(updateLoading(true))
            const dateInISO = new Date().toISOString()
            const forecast = await getForecastByLatLon(dateInISO, lat, lon)
            const city = await getCurrentWeather(dateInISO, null, lat, lon)
            dispatch(
                updateWeatherResult({
                    ...forecast,
                    cityName: city.name,
                    country: city.sys.country,
                })
            )
            dispatch(updateLoading(false))
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                dispatch(
                    getWeather(
                        position.coords.latitude,
                        position.coords.longitude
                    )
                )
            })
        }
    }, [dispatch])

    return (
        <div className="App">
            <Header />
            <CitySearch />
            <WeatherResult />
        </div>
    )
}

export default App

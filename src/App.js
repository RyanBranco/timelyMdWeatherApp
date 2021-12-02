import "./App.css"
import CitySearch from "./Components/CitySearch/CitySearch"
import Header from "./Components/Header/Header"
import WeatherResult from "./Components/WeatherResult/WeatherResult"

function App() {
    return (
        <div className="App">
            <Header />
            <CitySearch />
            <WeatherResult />
        </div>
    )
}

export default App

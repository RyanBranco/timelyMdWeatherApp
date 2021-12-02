import axios from "axios"

export const getWeatherByCityName = async (cityName, dateInISO) => {
    return await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${process.env.REACT_APP_PRODUCTION_WEATHER_API_KEY}`,
        {
            method: "GET",
        }
    )
        .then((res) => res.data)
        .catch(() => false)
}

export const getForecastByLatLon = async (lat, lon, dateInISO) => {
    return await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&APPID=${process.env.REACT_APP_PRODUCTION_WEATHER_API_KEY}`,
        {
            method: "GET",
        }
    )
        .then((res) => res.data)
        .catch(() => false)
}

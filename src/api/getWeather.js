import axios from "axios"
const weatherApiKey = process.env.REACT_APP_PRODUCTION_WEATHER_API_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5"

export const getCurrentWeather = async (dateInISO, cityName, lat, lon) => {
    return await axios
        .get(`${BASE_URL}/weather`, {
            params: {
                q: cityName,
                units: "imperial",
                timestamp: dateInISO,
                APPID: weatherApiKey,
                lat,
                lon,
            },
        })
        .then((res) => res.data)
        .catch(() => false)
}

export const getForecastByLatLon = async (dateInISO, lat, lon) => {
    return await axios
        .get(`${BASE_URL}/onecall`, {
            params: {
                units: "imperial",
                timestamp: dateInISO,
                APPID: weatherApiKey,
                lat,
                lon,
            },
        })
        .then((res) => res.data)
        .catch(() => false)
}

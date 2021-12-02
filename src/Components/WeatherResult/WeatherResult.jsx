import { useSelector, useDispatch } from "react-redux"
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner"
import Temp from "../UI/Temp"
import Humidity from "../UI/Humidity"
import styles from "./WeatherResult.module.css"
import Button from "../Button/Button"
import { updatePreferredLocation } from "../../redux/weatherResult"
import { useEffect, useState } from "react"

export default function WeatherResult() {
    const { weatherResult } = useSelector((state) => state)
    const dispatch = useDispatch()
    const [isPreferredLocation, setIsPreferredLocation] = useState(false)

    const setPreferredLocation = () => {
        const savedLocation = {
            lat: weatherResult.result.lat,
            lon: weatherResult.result.lon,
            cityName: weatherResult.result.cityName,
        }
        localStorage.setItem(
            "weather-preferred-location",
            JSON.stringify(savedLocation)
        )

        dispatch(updatePreferredLocation(savedLocation))
        setIsPreferredLocation(true)
    }

    useEffect(() => {
        const preferredLatLon = JSON.parse(
            localStorage.getItem("weather-preferred-location")
        )

        if (
            preferredLatLon &&
            weatherResult.result &&
            preferredLatLon.lat === weatherResult.result.lat &&
            preferredLatLon.lon === weatherResult.result.lon
        )
            setIsPreferredLocation(true)
        else setIsPreferredLocation(false)
    }, [weatherResult.result])

    return (
        <div
            className={`${styles.weatherResultContainer} dfc aic jcc br4 pl w100`}
        >
            {weatherResult.loading ? (
                <LoadingSpinner height={40} />
            ) : weatherResult.result !== null ? (
                <div>
                    <div className={`${styles.cityName} dfc mn mbl aic`}>
                        {weatherResult.result.cityName} (
                        {weatherResult.result.country})
                        <sup className={`${styles.latLon} mbl`}>
                            <small>
                                {weatherResult.result.lat},{" "}
                                {weatherResult.result.lon}
                            </small>
                        </sup>
                        {isPreferredLocation ? (
                            <p>This is your preferred location 👍</p>
                        ) : (
                            <Button
                                onClick={setPreferredLocation}
                                text="Set as preferred location"
                            />
                        )}
                    </div>
                    <div className="dfr jca mbel">
                        <div className="dfc">
                            <div className="dfr aic">
                                <div className="mrm">
                                    <Temp height={45} />
                                </div>
                                <p className={`${styles.largeItem}`}>
                                    {Math.round(
                                        weatherResult.result.current.temp
                                    )}
                                    &#176;
                                </p>
                            </div>
                            <p className="greyText">Current Temp.</p>
                        </div>
                        <div className="dfc">
                            <div className="dfr aic">
                                <div className="mrm">
                                    <Humidity height={45} />
                                </div>
                                <p className={`${styles.largeItem}`}>
                                    {weatherResult.result.current.humidity}%
                                </p>
                            </div>
                            <p className="greyText">Current Humi.</p>
                        </div>
                    </div>
                    <Forecast />
                </div>
            ) : (
                <h2 className="greyText">
                    Search a location to see what the weather is!
                </h2>
            )}
        </div>
    )

    function Forecast() {
        return (
            <div>
                <p className="mbs">Forecast</p>
                <div className={`${styles.forecastContainer}`}>
                    {weatherResult.result.daily.map((day, index) => (
                        <div
                            key={day.dt}
                            className={`${styles.forecastItem} br4 ps`}
                        >
                            <h3 className="mn mbm dfr aic">
                                {index === 0
                                    ? "Today"
                                    : new Date(day.dt * 1000).toLocaleString(
                                          "en-us",
                                          {
                                              weekday: "short",
                                          }
                                      )}
                                <Temp height={20} />
                            </h3>
                            <div className="dfr jcc">
                                <div className="dfr">
                                    <p className="mrl">
                                        <small className="greyText mrs">
                                            H:
                                        </small>
                                        {Math.round(day.temp.max)}
                                        &#176;
                                    </p>
                                    <p>
                                        <small className="greyText mrs">
                                            L:
                                        </small>
                                        {Math.round(day.temp.min)}
                                        &#176;
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

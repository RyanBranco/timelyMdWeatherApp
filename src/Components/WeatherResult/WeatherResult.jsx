import { useSelector } from "react-redux"
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner"
import Temp from "../UI/Temp"
import Humidity from "../UI/Humidity"
import styles from "./WeatherResult.module.css"

export default function WeatherResult() {
    const { weatherResult } = useSelector((state) => state)

    return (
        <div className={`${styles.weatherResultContainer} dfc aic jcc br4 pl`}>
            {weatherResult.loading ? (
                <LoadingSpinner height={40} />
            ) : weatherResult.result !== null ? (
                <div>
                    <p className={`${styles.cityName} dfc mn mbl aic`}>
                        {weatherResult.result.cityName} (
                        {weatherResult.result.country})
                        <sup className={`${styles.latLon}`}>
                            <small>
                                {weatherResult.result.lat},{" "}
                                {weatherResult.result.lon}
                            </small>
                        </sup>
                    </p>
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

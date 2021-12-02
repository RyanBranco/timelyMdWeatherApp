import { useSelector } from "react-redux"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
import styles from "./WeatherResult.module.css"

export default function WeatherResult() {
    const { weatherResult } = useSelector((state) => state)
    console.log("weatherResult: ", weatherResult)

    return (
        <div className="dfc aic">
            {weatherResult.loading ? (
                <LoadingSpinner height={40} />
            ) : (
                weatherResult.result !== null && (
                    <div className={`${styles.weatherResultContainer}`}>
                        <h3>{weatherResult.result.name}</h3>
                    </div>
                )
            )}
        </div>
    )
}

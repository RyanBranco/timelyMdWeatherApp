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
                    <div className={`${styles.weatherResultContainer} br4 pl`}>
                        <h2 className="mn">{weatherResult.result.name}</h2>
                    </div>
                )
            )}
        </div>
    )
}

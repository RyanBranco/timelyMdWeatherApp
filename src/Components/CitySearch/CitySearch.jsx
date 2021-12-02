import { useEffect, useState } from "react"
import SearchIcon from "../UI/Search"
import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"
import { useDispatch, useSelector } from "react-redux"
import { updateWeatherResult, updateLoading } from "../../redux/weatherResult"
import { getWeatherByCityName, getForecastByLatLon } from "../../api/getWeather"
import styles from "./CitySearch.module.css"

export default function CitySearch() {
    const { weatherResult } = useSelector((state) => state)
    const dispatch = useDispatch()

    const [searchValue, setSearchValue] = useState("")
    const [searchError, setSearchError] = useState("")
    const [preferredLocation, setPreferredLocation] = useState(false)

    const handleSearchValueChange = (id, value) => {
        setSearchValue(value)
    }

    const handleSearch = (cityName) => async (dispatch) => {
        const dateInISO = new Date().toISOString()
        setSearchError(false)
        dispatch(updateLoading(true))
        const cityRes = await getWeatherByCityName(cityName, dateInISO)
        if (cityRes) {
            const foreCast = await getForecastByLatLon(
                cityRes.coord.lat,
                cityRes.coord.lon,
                dateInISO
            )
            dispatch(
                updateWeatherResult({
                    ...foreCast,
                    cityName: cityRes.name,
                    country: cityRes.sys.country,
                })
            )
        } else {
            dispatch(updateWeatherResult(null))
            setSearchError("Could not find city")
        }
        dispatch(updateLoading(false))
    }

    useEffect(() => {
        setPreferredLocation(weatherResult.preferredLocation)
    }, [weatherResult])

    return (
        <form className="dfc aic mbel">
            <div className="dfr jcc aie mbl">
                <div className="mrl">
                    <TextInput
                        hideLabel={true}
                        label="City Search"
                        placeholder={"San Diego"}
                        id="search"
                        onChange={handleSearchValueChange}
                    />
                </div>
                <Button
                    disabled={searchValue.length === 0}
                    onClick={() => handleSearch(searchValue)}
                    render={<SearchIcon height={23} />}
                    text="Search"
                />
            </div>
            {preferredLocation ? (
                <Button
                    text={`Get ${preferredLocation.cityName}'s weather`}
                    onClick={() =>
                        dispatch(handleSearch(preferredLocation.cityName))
                    }
                />
            ) : (
                <small>
                    Set a peferred location to instantly get the weather
                </small>
            )}

            {searchError && (
                <p className={`${styles.searchError}`}>{searchError}</p>
            )}
        </form>
    )
}

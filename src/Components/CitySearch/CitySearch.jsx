import { useState } from "react"
import SearchIcon from "../UI/Search"
import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"
import { useDispatch, useSelector } from "react-redux"
import { updateSearchValue } from "../../redux/search"
import { updateWeatherResult, updateLoading } from "../../redux/weatherResult"
import { getWeatherByCityName, getForecastByLatLon } from "../../api/getWeather"
import styles from "./CitySearch.module.css"

export default function CitySearch() {
    const { value } = useSelector((state) => state.search)
    const dispatch = useDispatch()

    const [searchError, setSearchError] = useState("")

    const handleSearchValueChange = (id, value) => {
        dispatch(updateSearchValue(value))
    }

    const handleSearch = () => async (dispatch) => {
        const dateInISO = new Date().toISOString()
        setSearchError(false)
        dispatch(updateLoading(true))
        const cityRes = await getWeatherByCityName(value, dateInISO)
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
                    disabled={value.length === 0}
                    onClick={() => dispatch(handleSearch())}
                    render={<SearchIcon height={23} />}
                    text="Search"
                />
            </div>
            {searchError && (
                <p className={`${styles.searchError}`}>{searchError}</p>
            )}
        </form>
    )
}

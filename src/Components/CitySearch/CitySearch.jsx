import { useEffect, useState } from "react"
import SearchIcon from "../UI/Search"
import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"
import { useDispatch, useSelector } from "react-redux"
import { updateWeatherResult, updateLoading } from "../../redux/weatherResult"
import { getCurrentWeather, getForecastByLatLon } from "../../api/getWeather"

export default function CitySearch() {
    const { weatherResult } = useSelector((state) => state)
    const dispatch = useDispatch()

    const [searchValue, setSearchValue] = useState({
        value: "",
    })
    const [searchError, setSearchError] = useState("")
    const [preferredLocation, setPreferredLocation] = useState(false)

    const handleSearchValueChange = (id, value) => {
        setSearchError(false)
        setSearchValue(value)
    }

    const handleSearch = (cityName) => async (dispatch) => {
        const dateInISO = new Date().toISOString()
        dispatch(updateLoading(true))
        const cityRes = await getCurrentWeather(dateInISO, cityName)
        if (cityRes) {
            const forecast = await getForecastByLatLon(
                dateInISO,
                cityRes.coord.lat,
                cityRes.coord.lon
            )
            dispatch(
                updateWeatherResult({
                    ...forecast,
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
        <div>
            {preferredLocation ? (
                <div className="mbl">
                    <Button
                        text={`Get weather in ${preferredLocation.cityName}`}
                        onClick={() =>
                            dispatch(handleSearch(preferredLocation.cityName))
                        }
                    />
                </div>
            ) : (
                <p className="mbl">No preferred location</p>
            )}
            <form className="dfc aic mbel">
                <div className="dfr jcc aie">
                    <div className="mrs">
                        <TextInput
                            hideLabel={true}
                            label="City Search"
                            placeholder={"San Diego"}
                            id="search"
                            error={searchError}
                            onChange={handleSearchValueChange}
                        />
                    </div>
                    <Button
                        disabled={searchValue.length === 0}
                        onClick={() => dispatch(handleSearch(searchValue))}
                        render={<SearchIcon height={23} />}
                        text="Search"
                    />
                </div>
            </form>
        </div>
    )
}

import { useState } from "react"
import SearchIcon from "../../UI/Search"
import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"
import { useDispatch, useSelector } from "react-redux"
import { updateSearchValue } from "../../redux/search"
import { updateWeatherResult, updateLoading } from "../../redux/weatherResult"
import axios from "axios"
import styles from "./CitySearch.module.css"

export default function CitySearch() {
    const { value } = useSelector((state) => state.search)
    const dispatch = useDispatch()

    const [searchError, setSearchError] = useState("")

    const handleSearchValueChange = (id, value) => {
        dispatch(updateSearchValue(value))
    }

    const handleSearch = () => async (dispatch) => {
        setSearchError(false)
        dispatch(updateLoading(true))
        try {
            const cityRes = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=281e9dfdc104a5e5667ee09c6bdcb0d4`
            )
            const getForcast = await axios.get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${cityRes.data.coord.lat}&lon=${cityRes.data.coord.lon}&APPID=281e9dfdc104a5e5667ee09c6bdcb0d4`
            )
            dispatch(updateWeatherResult(getForcast.data))
        } catch {
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
                        placeholder={"San Diego, CA"}
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

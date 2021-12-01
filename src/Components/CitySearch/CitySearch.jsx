import { useState } from "react"
import SearchIcon from "../../UI/Search"
import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"
import styles from "./CitySearch.module.css"

export default function CitySearch() {
    const [citySearch, setCitySearch] = useState({
        searchValue: "",
    })

    const handleSearchValueChange = (id, value) => {
        setCitySearch({ ...citySearch, [id]: value })
    }

    const handleSearch = () => {
        console.log("I run search")
    }

    return (
        <form className={`${styles.citySearchContainer} dfc aic`}>
            <h2>Search Over 20,000 Cities</h2>
            <div className="dfr jcc aie">
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
                    disabled={citySearch.searchValue.length > 1}
                    onClick={handleSearch}
                    render={<SearchIcon height={23} />}
                    text="Search"
                />
            </div>
        </form>
    )
}

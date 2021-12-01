import SearchIcon from "../../UI/Search"
import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"
import { useDispatch, useSelector } from "react-redux"
import { updateSearchValue } from "../../redux/search"
// import styles from "./CitySearch.module.css"

export default function CitySearch() {
    const { search } = useSelector((state) => state.search)
    const dispatch = useDispatch()

    const handleSearchValueChange = (id, value) => {
        dispatch(updateSearchValue(value))
    }

    const handleSearch = () => {
        console.log("I run search")
    }

    return (
        <form className="dfc aic">
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
                    disabled={search.length === 0}
                    onClick={handleSearch}
                    render={<SearchIcon height={23} />}
                    text="Search"
                />
            </div>
        </form>
    )
}

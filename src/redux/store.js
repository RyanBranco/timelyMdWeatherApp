import { configureStore } from "@reduxjs/toolkit"
import search from "../redux/search"
import weatherResult from "../redux/weatherResult"

export default configureStore({
    reducer: {
        search,
        weatherResult,
    },
})

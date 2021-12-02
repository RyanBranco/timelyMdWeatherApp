import { configureStore } from "@reduxjs/toolkit"
import weatherResult from "../redux/weatherResult"

export default configureStore({
    reducer: {
        weatherResult,
    },
})

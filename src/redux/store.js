import { configureStore } from "@reduxjs/toolkit"
import search from "../redux/search"

export default configureStore({
    reducer: {
        search,
    },
})

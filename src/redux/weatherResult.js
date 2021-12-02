import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    result: null,
    preferredLocation: JSON.parse(
        localStorage.getItem("weather-preferred-location")
    ),
}

export const weatherResultSlice = createSlice({
    name: "weatherResults",
    initialState,
    reducers: {
        updateLoading: (state, action) => {
            state.loading = action.payload
        },
        updateWeatherResult: (state, action) => {
            state.result = action.payload
        },
        updatePreferredLocation: (state, action) => {
            state.preferredLocation = action.payload
        },
    },
})

export const { updateWeatherResult, updateLoading, updatePreferredLocation } =
    weatherResultSlice.actions
export default weatherResultSlice.reducer

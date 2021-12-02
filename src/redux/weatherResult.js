import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    result: null,
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
    },
})

export const { updateWeatherResult, updateLoading } = weatherResultSlice.actions
export default weatherResultSlice.reducer

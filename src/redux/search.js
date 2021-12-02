import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: "",
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        updateSearchValue: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { updateSearchValue } = searchSlice.actions
export default searchSlice.reducer

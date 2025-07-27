import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
    },
    reducers: {
        cacheSearchSuuggestions : (state, action) => {
            state = Object.assign(state, action.payload)
        }
       
    }
})
export const {cacheSearchSuuggestions} = searchSlice.actions
export default searchSlice.reducer
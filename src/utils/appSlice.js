import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuItemsOpen: false
    },
    reducers: {
        toggleMenuItems : (state) => {
            state.isMenuItemsOpen = !state.isMenuItemsOpen
        }
    }
})

export const {toggleMenuItems} = appSlice.actions

export default appSlice.reducer
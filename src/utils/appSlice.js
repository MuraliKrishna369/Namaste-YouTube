import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuItemsOpen: false,
       
    },
    reducers: {
        toggleMenuItems : (state) => {
            state.isMenuItemsOpen = !state.isMenuItemsOpen
        },
        closeSlidebar: (state) => {
            state.isMenuItemsOpen = null
        },
       

    }
})

export const {toggleMenuItems, closeSlidebar} = appSlice.actions

export default appSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuItemsOpen: false,
       
    },
    reducers: {
       activeDefaultSidebar: (state) => {
          state.isMenuItemsOpen = true
       }, 
       toggleSidebar: (state) => {
          state.isMenuItemsOpen = !state.isMenuItemsOpen
       }

    }
})

export const {activeDefaultSidebar, toggleSidebar} = appSlice.actions

export default appSlice.reducer
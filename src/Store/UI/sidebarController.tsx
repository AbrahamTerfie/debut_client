import React from 'react';
import { createSlice } from '@reduxjs/toolkit';


const initalState = {
    isSidebarOpen: true,

}


const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: initalState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
})



export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';


const initalState = {
    isSidebarOpen: true,
    myDebutTab: '1',

}


const uiStore = createSlice({
    name: 'sidebar',
    initialState: initalState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        setMyDebutTab: (state, action) => {
            state.myDebutTab = action.payload;
        }

        
    }
})



export const { toggleSidebar, setMyDebutTab } = uiStore.actions;
export default uiStore.reducer;
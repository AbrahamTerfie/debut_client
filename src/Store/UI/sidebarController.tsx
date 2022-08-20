import React from 'react';
import { createSlice } from '@reduxjs/toolkit';


const initalState = {
    isSidebarOpen: true,
    myDebutTab: '1',
    activePersonId: '',

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
        },
        setActivePersonId: (state, action) => {
            state.activePersonId = action.payload;
        }


    }
})



export const { toggleSidebar, setMyDebutTab, setActivePersonId } = uiStore.actions;
export default uiStore.reducer;
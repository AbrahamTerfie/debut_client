import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { EmailTypes } from '../../Email/EmailTypes';




const initalState = {
    isSidebarOpen: true,
    myDebutTab: '1',
    activePersonId: '',
    peopleExpertiseFilter: [] as any,
    peopleRegionFilter: [] as any,
    emailPopup: false,
    emailType: "",

}


const uiStore = createSlice({
    name: 'sidebar',
    initialState: initalState,
    reducers: {
        toggleEmailPopup(state: any, action?: any) {
            state.emailPopup = !state.emailPopup
            // chanhe email type 
            action ? (state.emailType = action?.payload) : (state.emailType = EmailTypes.clear)
        },
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        setMyDebutTab: (state, action) => {
            state.myDebutTab = action.payload;
        },
        setActivePersonId: (state, action) => {
            state.activePersonId = action.payload;
        },
        peopleExpertiseFilterHandler: (state, action) => {
            if (state.peopleExpertiseFilter.includes(action.payload)) {
                state.peopleExpertiseFilter = state.peopleExpertiseFilter.filter((item: any) => item !== action.payload)
            } else {
                state.peopleExpertiseFilter = [...state.peopleExpertiseFilter, action.payload]
            }
        },
        peopleRegionFilterHandler: (state, action) => {
            if (state.peopleRegionFilter.includes(action.payload)) {
                state.peopleRegionFilter = state.peopleRegionFilter.filter((item: any) => item !== action.payload)
            } else {
                state.peopleRegionFilter = [...state.peopleRegionFilter, action.payload]
            }
        },
        clearPeopleFilter: (state) => {
            state.peopleExpertiseFilter = [] as any
            state.peopleRegionFilter = [] as any
        }
    }
})



export const { toggleEmailPopup, toggleSidebar, setMyDebutTab, setActivePersonId,
    peopleExpertiseFilterHandler, peopleRegionFilterHandler, clearPeopleFilter } = uiStore.actions;

export default uiStore.reducer;
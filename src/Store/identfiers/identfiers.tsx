// import React from 'react';
import { createSlice } from '@reduxjs/toolkit';


const initalState = {
    userID: '',
    companyID: '',

    userFullName: '',
    userEmail: '',
    hasCompany: false,
    myBiography: '',
    myCompanyDescription: '',

}


const Id_Identfiers = createSlice({
    name: 'sidebar',
    initialState: initalState,
    reducers: {
        setPersonaldata: (state, action) => {
            state.userID = action.payload.userID;
            state.userFullName = action.payload.userFullName;
            state.userEmail = action.payload.userEmail;
            state.myBiography = action.payload.myBiography;
            state.myCompanyDescription = action.payload.myCompanyDescription;
        },

        setHasCompany: (state, action) => {
            state.hasCompany = action.payload;
        },
        setCompanyID: (state, action) => {
            state.companyID = action.payload;
        },
        togglehasCompany: (state, action) => {
            state.hasCompany = action.payload;
        },


    }
})



export const {

    setCompanyID,
    togglehasCompany,
    setPersonaldata,
    setHasCompany } = Id_Identfiers.actions;
export default Id_Identfiers.reducer;
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';


const initalState = {
    userID: '',
    userFullName: '',
    userEmail: '',
    hasCompany: false,
    companyID: '',
    debutEventID: '',
    debutRegistryID: '',
    debutRegistryItem: '',
    forumPostID: '',
    postCommentID: '',
    gratitudeID: '',
    myBiography: '',

}


const Id_Identfiers = createSlice({
    name: 'sidebar',
    initialState: initalState,
    reducers: {
        setUserID: (state, action) => {
            state.userID = action.payload;
        },
        setUserFullName: (state, action) => {
            state.userFullName = action.payload;
        },
        setUserEmail: (state, action) => {
            state.userEmail = action.payload;
        },
        setMyBiography: (state, action) => {
            state.myBiography = action.payload;
        },
        setPersonaldata: (state, action) => {
            state.userID = action.payload.userID;
            state.userFullName = action.payload.userFullName;
            state.userEmail = action.payload.userEmail;
            state.myBiography = action.payload.myBiography;
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

        setDebutEventID: (state, action) => {
            state.debutEventID = action.payload;
        },
        setDebutRegistryID: (state, action) => { },
        setDebutRegistryItem: (state, action) => { },
        setForumPostID: (state, action) => { },
        setPostCommentID: (state, action) => { },
        setGratitudeID: (state, action) => { },

    }
})



export const {
    setUserID,
    setCompanyID,
    togglehasCompany,
    setUserFullName,
    setPersonaldata,
    setUserEmail,
    setHasCompany } = Id_Identfiers.actions;
export default Id_Identfiers.reducer;
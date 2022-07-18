import React from 'react';
import { createSlice } from '@reduxjs/toolkit';


const initalState = {
    userID: '',
    companyID: '',
    debutEventID: '',
    debutRegistryID: '',
    debutRegistryItem: '',
    forumPostID: '',
    postCommentID: '',
    gratitudeID: '',

}


const Id_Identfiers = createSlice({
    name: 'sidebar',
    initialState: initalState,
    reducers: {
        setUserID: (state, action) => {
            state.userID = action.payload;
        },
        setCompanyID: (state, action) => {
            state.companyID = action.payload;
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



export const { setUserID, setCompanyID } = Id_Identfiers.actions;
export default Id_Identfiers.reducer;
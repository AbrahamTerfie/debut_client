import React, { useState, useEffect } from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { useAuth0 } from '@auth0/auth0-react'
import { useMutation } from '@apollo/client'
import { CHECK_EMAIL_VALIDITY } from '../../GraphQl/index'



const initalState = {
    userEmail: '',
    auth0UserInfo: {
        email: '',
        firstName: '',
        nickName: '',
    },
    isCheckingEmailExists: false,
    emailExists: false,
    firsstTimeUser: false,
}


const authSlice = createSlice({
    name: 'AUTHENTICATION',
    initialState: initalState,
    reducers: {



        setUserEmail: (state, action) => {
            state.userEmail = action.payload;
        }
    }
})


export const { setUserEmail } = authSlice.actions;
export default authSlice.reducer;

/*
get the user object from the auth0 hook
send the user object to the server with the email 
     with checkUserExistsByEmail mutation

if user Esists in the database do nothing 

if user does not exist in the database create a new user
with the userobject from the auth0 hook  and createNewUser Mutation
        email: user.email,
        frstname : user.name,
        username : nickname 

save the user object to the local storage


*/

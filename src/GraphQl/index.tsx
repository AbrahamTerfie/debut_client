import React from 'react'
import { CHECK_EMAIL_VALIDITY } from './EmailValidator/EmailValidator'
import {CREATE_DEBUT_USER,AUTHENTICATED_USER} from './User/createUser'
import {GET_DEBUT_USER_WITH_EMAIL} from './User/fetchUser'
import { FETCH_ALL_FORUM_POSTS ,CREATE_FORUM_POST  } from './PostComment/PostQuery'

export {
    CHECK_EMAIL_VALIDITY,
    CREATE_DEBUT_USER,
    GET_DEBUT_USER_WITH_EMAIL,
    AUTHENTICATED_USER,

    // forum post
    FETCH_ALL_FORUM_POSTS,
    CREATE_FORUM_POST
    // DELETE_DEBUT_USER,
    // GET_DEBUT_USER_WITH_EMAIL,
    // GET_DEBUT_USER_WITH_ID,
    // UPDATE_DEBUT_USER
}
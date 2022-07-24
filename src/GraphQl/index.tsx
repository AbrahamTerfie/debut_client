import React from 'react'
import { CHECK_EMAIL_VALIDITY } from './EmailValidator/EmailValidator'
import { CREATE_DEBUT_USER, AUTHENTICATED_USER } from './User/createUser'
import { GET_DEBUT_USER_WITH_EMAIL, FETCH_USER_WITH_ID, UPDATE_DEBUT_USER_WITH_ID } from './User/fetchUser'
import {
    FETCH_ALL_FORUM_POSTS, CREATE_FORUM_POST,
    CREATE_FORUM_COMMENT, FETCH_POST_COMMENTS
} from './PostComment/PostQuery'

import { CHECK_IF_USER_HAS_COMPANY } from './Company/companyQueries'


export {
    CHECK_EMAIL_VALIDITY,
    CREATE_DEBUT_USER,
    GET_DEBUT_USER_WITH_EMAIL,
    FETCH_USER_WITH_ID,
    UPDATE_DEBUT_USER_WITH_ID,
    AUTHENTICATED_USER,

    // forum post
    FETCH_ALL_FORUM_POSTS,
    CREATE_FORUM_POST,

    CREATE_FORUM_COMMENT,
    FETCH_POST_COMMENTS,


    // company
    CHECK_IF_USER_HAS_COMPANY


}
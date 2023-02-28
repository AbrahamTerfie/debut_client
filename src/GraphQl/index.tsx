
import { CHECK_EMAIL_VALIDITY } from './EmailValidator/EmailValidator'
import { CREATE_DEBUT_USER, AUTHENTICATED_USER } from './User/createUser'
import {
    GET_DEBUT_USER_WITH_EMAIL, FETCH_USER_WITH_ID,
    UPDATE_DEBUT_USER_WITH_ID
} from './User/fetchUser'
import {
    FETCH_ALL_FORUM_POSTS, CREATE_FORUM_POST,
    CREATE_FORUM_COMMENT, FETCH_POST_COMMENTS
} from './PostComment/PostQuery'
import {
    CHECK_IF_USER_HAS_COMPANY,
    CREATE_COMPANY, FETCH_COMPANY, UPDATE_COMPANY, GET_ALL_VENTURES
} from './Company/companyQueries'
import {
    CREATE_EVENT, MY_DEBUT_EVENTS, EVENTS_PAGE,
    DEBUT_EVENT_DETAILS, EVENT_PAGE_REGISTRY
} from './DebutEvents/eventQuries'
import { EVENT_REGISTRIES } from './DebutRegistry/RegistryQuries'
import { GET_REGISTRY_ITEMS_WITH_REGISTRY_ID, CREATE_REGISTRY_ITEM } from './RegistryItem/RegistryItemQuries'
import { All_USERS } from './User/userInfo'

import { GRATITUDE_TO_USER, CREATE_GRATITUDE, RECIVED_GRATITUDE, SENT_GRATITUDE } from './Gratitude/GratitudeTosend'

import { FETCH_COMPANY_GOALS_WITH_COMPANY_ID, CREATE_COMPANY_GOAL, DELETE_COMPANY_GOAL, UPDATE_COMPANY_GOAL } from './Goals/goals'
import { CREATE_NEW_MILESTONE, DELETE_COMPANY_MILESTONE, TOGGLE_MILESTONE_STATUS } from './Goals/milestones'
import {
    GET_EVENT_WITH_ID, CREATE_DEBUT_REGISTRY,
    NEW_REGISTRY_ITEM, DELETE_DEBUT_REGISTRY,
    DELETE_REGISTRY_ITEM, MARK_ITEM_AS_FULFILLED, TOGGLE_REGISTRY_STATUS, NUKE_DEBUT_EVENT
} from './DebutEvents/DebutEvents'
import { COMPANY_PAGE } from './Company/companyPage'

import { SearchUser, SearchVenture, searchDebutEvent } from './Search/SearchQueries'

import { SEND_INVIE_TO_USER, GET_EVENT_INVITATIONS } from './EInvitation/invitation'

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
    CHECK_IF_USER_HAS_COMPANY,
    CREATE_COMPANY,
    FETCH_COMPANY,
    UPDATE_COMPANY,
    GET_ALL_VENTURES,
    // debut events 
    CREATE_EVENT,
    MY_DEBUT_EVENTS,
    EVENTS_PAGE,
    // registry
    CREATE_DEBUT_REGISTRY,
    EVENT_REGISTRIES,
    DEBUT_EVENT_DETAILS,
    EVENT_PAGE_REGISTRY,
    //registry item
    GET_REGISTRY_ITEMS_WITH_REGISTRY_ID,
    CREATE_REGISTRY_ITEM,
    //perope 
    All_USERS,
    //gratitude
    GRATITUDE_TO_USER,
    CREATE_GRATITUDE,
    RECIVED_GRATITUDE,
    SENT_GRATITUDE,

    // goals
    FETCH_COMPANY_GOALS_WITH_COMPANY_ID,
    CREATE_COMPANY_GOAL,
    DELETE_COMPANY_GOAL,
    UPDATE_COMPANY_GOAL,
    // milestones
    CREATE_NEW_MILESTONE,
    DELETE_COMPANY_MILESTONE,
    TOGGLE_MILESTONE_STATUS,

    // debut events (new queries)
    GET_EVENT_WITH_ID,
    NEW_REGISTRY_ITEM,
    DELETE_DEBUT_REGISTRY,
    DELETE_REGISTRY_ITEM,
    MARK_ITEM_AS_FULFILLED,
    TOGGLE_REGISTRY_STATUS,
    NUKE_DEBUT_EVENT,
    COMPANY_PAGE,

    // search
    SearchUser,
    SearchVenture,
    searchDebutEvent,



    // INVITATION

    SEND_INVIE_TO_USER,
    GET_EVENT_INVITATIONS

}
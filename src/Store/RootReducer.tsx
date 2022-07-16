import { combineReducers } from '@reduxjs/toolkit'
import sidebarController from "./UI/sidebarController";
import authController from "./Auth/AuthSlice";
import identfiers from "./identfiers/identfiers";


const rootReducer = combineReducers({
    sideBarOpen: sidebarController,
    identfiers: identfiers,
    auth: authController
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

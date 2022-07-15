import { combineReducers } from '@reduxjs/toolkit'
import sidebarController from "./UI/sidebarController";
import authController from "./Auth/AuthSlice";


const rootReducer = combineReducers({
    sideBarOpen: sidebarController,
    auth: authController
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

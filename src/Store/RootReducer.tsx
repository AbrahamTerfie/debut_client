import { combineReducers } from '@reduxjs/toolkit'
import sidebarController from "./UI/sidebarController";


const rootReducer = combineReducers({
    sideBarOpen: sidebarController
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

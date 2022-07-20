import { combineReducers } from '@reduxjs/toolkit'
import uiStore from "./UI/sidebarController";
import authController from "./Auth/AuthSlice";
import identfiers from "./identfiers/identfiers";


const rootReducer = combineReducers({
    uiStore: uiStore,
    identfiers: identfiers,
    auth: authController
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

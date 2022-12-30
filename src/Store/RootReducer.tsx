import { combineReducers } from '@reduxjs/toolkit'
import uiStore from "./UI/sidebarController";
import authController from "./Auth/AuthSlice";
import identfiers from "./identfiers/identfiers";
import onBoardingSlice from "./OnBoarding/OnBoarding";

const rootReducer = combineReducers({
    uiStore: uiStore,
    identfiers: identfiers,
    auth: authController,
    onBoarding: onBoardingSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

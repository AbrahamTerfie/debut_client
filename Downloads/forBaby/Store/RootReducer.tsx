import {combineReducers} from '@reduxjs/toolkit';
import uiStore from './ThemeController';

const rootReducer = combineReducers({
  uiStore: uiStore,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

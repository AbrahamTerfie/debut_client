import {configureStore, Action} from '@reduxjs/toolkit';

import {ThunkAction} from 'redux-thunk';

import rootReducer, {RootState} from './RootReducer';

const store = configureStore({
  reducer: rootReducer,
});

const newRootReducer = require('./RootReducer').default;
store.replaceReducer(newRootReducer);
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;

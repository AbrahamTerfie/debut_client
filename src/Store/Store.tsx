// import { configureStore } from "@reduxjs/toolkit";
// import sidebarController from "./UI/sidebarController";

// // import { combineReducers } from '@reduxjs/toolkit'
// // const rootReducer = combineReducers({})
// // export type RootState = ReturnType<typeof rootReducer>



// export const store = configureStore({
//     reducer: {
//         sidebar: sidebarController
//     }
// });


// export type RootState = ReturnType<typeof store.getState>

// export default store






import { configureStore, Action } from '@reduxjs/toolkit'

import { ThunkAction } from 'redux-thunk'

import rootReducer, { RootState } from './RootReducer'

const store = configureStore({
    reducer: rootReducer
})

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootReducer', () => {

//   })
// }


const newRootReducer = require('./RootReducer').default
store.replaceReducer(newRootReducer)
export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store

import { AnyAction, combineReducers } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';
import {itemsReducer} from "../src/reducer/items.reducer";


const rootReducer = combineReducers({
    items: itemsReducer,

})

export const store = configureStore({
    reducer: rootReducer,
})


export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store;
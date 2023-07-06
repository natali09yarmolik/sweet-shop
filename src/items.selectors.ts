import {AppRootStateType} from "src/store";

export const selectItems = (state: AppRootStateType) => state.items.items
export const selectItemsInBasket = (state: AppRootStateType) => state.items.newItems
export const selectTotal = (state: AppRootStateType) => state.items.total
export const selectVisible = (state: AppRootStateType) => state.items.visibleBasket


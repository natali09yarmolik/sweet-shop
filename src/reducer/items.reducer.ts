import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {createAppAsyncThunk} from "src/common/until/create-app-async-thunk";
import {ItemType} from "src/common/types";

const fetchItems = createAppAsyncThunk<{ items: ItemType[] }, void>
('sweet/fetchItems', async (_, {rejectWithValue}) => {
   /* const res = await fetch('http://localhost:3010/src/items')*/
    const res = await fetch('https://sweet-shop-back.vercel.app')
    console.log(res.json())
    const result = await res.json()

    if (result.data) {
        return {items: result.data}
    } else {
        return rejectWithValue({data: result.data, showGlobalError: false})
    }
})

type InitialStateType = {
    items: ItemType[],
    newItems: ItemType[],
    total: number,
    visibleBasket: boolean
}
const initialState: InitialStateType = {
    items: [],
    newItems: [],
    total: 0,
    visibleBasket: false,
}

const slice = createSlice({
        name: 'items',
        initialState,
        reducers: {
            addItemsInBasket: (state, action: PayloadAction<{ itemId: number }>) => {
                const itemInBasket = state.items.find(el => (el.id === action.payload.itemId))
                if (itemInBasket) {
                    state.newItems.push(itemInBasket)
                }
            },
            addItemsFromLocal: (state, action: PayloadAction<{ items: ItemType[] }>) => {
                if (action.payload.items) {
                    state.newItems = action.payload.items
                }
            },
            deleteCountItems: (state, action: PayloadAction<{ itemId: number, count: number }>) => {
                const itemInBasket = state.newItems.find(el => (el.id === action.payload.itemId))
                if (itemInBasket) {
                    itemInBasket.count = action.payload.count - 1
                }
            },
            addCountItems: (state, action: PayloadAction<{ itemId: number, itemCount: number }>) => {
                const itemInBasket = state.newItems.find(el => (el.id === action.payload.itemId))
                if (itemInBasket) {
                    itemInBasket.count = action.payload.itemCount + 1
                }
            },
            deleteItems: (state, action: PayloadAction<{ index: number }>) => {
                state.newItems.splice(action.payload.index, 1)
            },
            clearItems: (state, action) => {
                state.newItems = []
            },
            totalPrice: (state, action) => {
                state.total = state.newItems.reduce((totalItem, el) => {
                    totalItem += el.count as number * el.price
                    return totalItem
                }, 0)
            },
            changeVisibleBasket: (state, action: PayloadAction<{ visible: boolean }>) => {
                state.visibleBasket = !action.payload.visible
            },
        },
        extraReducers: builder => {
            builder
                .addCase(fetchItems.fulfilled, (state, action) => {
                    state.items = action.payload.items
                })
        }
    }
)

export const itemsReducer = slice.reducer
export const itemsActions = slice.actions
export const itemsThunks = {fetchItems}




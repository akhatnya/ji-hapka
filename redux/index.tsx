import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
	items: any[]
}

const initialState: InitialState = {
	items: []
};

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		setBasketItems: (state: any, action: PayloadAction<any>) => {
			state.items = action.payload
		},
		addBasketItem: (state, action: PayloadAction<any>) => {
			state.items.push(action.payload)
		}
	}
});

const { actions, reducer } = basketSlice;

export default reducer;

export const {
	addBasketItem,
	setBasketItems
} = actions;
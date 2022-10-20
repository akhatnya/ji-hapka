import { configureStore } from "@reduxjs/toolkit";
import basketItems from '../redux'

const store = configureStore({
	reducer: { basketItems },
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../features/library/librarySlice";

export const store = configureStore({
	reducer: {
		library: libraryReducer,
	},
});

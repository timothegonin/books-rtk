import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../features/library/librarySlice";
import fetchBookReducer from "../features/fetchBooks/fetchBooksSlice";

export const store = configureStore({
	reducer: {
		library: libraryReducer,
		search: fetchBookReducer,
	},
});

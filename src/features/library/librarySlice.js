import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
	books: [],
};

const updateLocalStorage = (newBooksArray) => {
	localStorage.setItem("bookData", JSON.stringify(newBooksArray));
};

const librarySlice = createSlice({
	name: "library",
	initialState,
	reducers: {
		getLocalStorageData: (state) => {
			state.books = JSON.parse(localStorage.getItem("bookData"));
		},
		addBook: (state, action) => {
			const newBook = {
				id: uuidv4(),
				title: action.payload.title,
				author: action.payload.author,
			};
			state.books.push(newBook);
			updateLocalStorage(state.books);
		},
	},
});

export default librarySlice.reducer;
export const { addBook, getLocalStorageData } = librarySlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
	books: [],
};

const librarySlice = createSlice({
	name: "library",
	initialState,
	reducers: {
		addBook: (state, action) => {
			const newBook = {
				id: uuidv4(),
				title: action.payload.title,
				author: action.payload.author,
			};
			state.books.push(newBook);
		},
	},
});

export default librarySlice.reducer;
export const { addBook } = librarySlice.actions;

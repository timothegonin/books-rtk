import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	isLoading: false,
	fetchedBooks: [],
	error: "",
};

export const fetchBooks = createAsyncThunk(
	"books/fetchBooks",
	async (title) => {
		const { data } = await axios.get(
			`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20`
		);
		return data.items;
	}
);

const fetchBookSlice = createSlice({
	name: "books",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBooks.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.fetchedBooks = payload;
			state.error = "";
		});
		builder.addCase(fetchBooks.rejected, (state, { error }) => {
			state.isLoading = false;
			state.fetchedBooks = [];
			state.error = error.message;
		});
	},
});

export default fetchBookSlice.reducer;

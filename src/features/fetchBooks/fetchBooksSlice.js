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
	name: "fetchedBooks",
	initialState,
	reducers: {},
});

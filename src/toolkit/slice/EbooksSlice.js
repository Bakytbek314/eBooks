import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../www/settings";

const initialState = {
    popularBooks: [],
};

export const getPopularBooks = createAsyncThunk(
    "popularBooks/getPopularBooks",
    async(_, { rejectWithValue, dispatch }) => {
        const result = await instance.get(`popular`)
        dispatch(popularBooks(result.data.eBooks))
        console.log("result>>>", result);
    }
);

const eBookSlice = createSlice({
    name: "eBooks",
    initialState,
    reducers: {
        popularBooks: (state, action) => {
            state.popularBooks = action.payload;
        }
    }
});

export const {
    popularBooks,
} = eBookSlice.actions;

export default eBookSlice.reducer;

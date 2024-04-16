import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../www/settings";

const initialState = {
    popularBooks: [],
    programmingBooks: [],
    favouriteBooks: [],
    infoBook: [],
    filter: [],
};

export const getPopularBooks = createAsyncThunk(
    "popularBooks/getPopularBooks",
    async (_, { dispatch }) => {
        const result = await instance.get(`popular`);
        dispatch(popularBooks(result.data));
    }
);

export const getProgrammingBooks = createAsyncThunk(
    "popularBooks/getProgrammingBooks",
    async (_, { dispatch }) => {
        const result = await instance.get(`programming`);
        dispatch(programmingBooks(result.data));
    }
);

export const getInfoBook = createAsyncThunk(
    "infoBook/getInfoBook",
    async (elem, { dispatch }) => {
        const result = await instance.get(`${elem[0]}/${elem[1]}`);
        dispatch(infoBook(result.data));
    }
);

export const getFilter = createAsyncThunk(
    "filter/getFilter",
    async(elem, {dispatch}) => {
        const res = await instance.get(`/${elem}`);
        dispatch(filter(res.data));
    }
)

const eBookSlice = createSlice({
    name: "eBooks",
    initialState,
    reducers: {
        popularBooks: (state, action) => {
            state.popularBooks = action.payload;
        },
        programmingBooks: (state, action) => {
            state.programmingBooks = action.payload;
        },
        favouriteBooks: (state, action) => {
            const find = state.favouriteBooks.findIndex((item) => item.id === action.payload.id);
            find >= 0 ? state.favouriteBooks[find].quantity += 1 : state.favouriteBooks.push(action.payload);
        },
        infoBook: (state, action) => {
            state.infoBook = action.payload;
        },
        filter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const {
    popularBooks,
    programmingBooks,
    infoBook,
    favouriteBooks,
    filter,
} = eBookSlice.actions;

export default eBookSlice.reducer;

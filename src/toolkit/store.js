import { configureStore } from '@reduxjs/toolkit';
import eBookSlice from './slice/EbooksSlice';
import EbooksSlice from './slice/EbooksSlice';

const store = configureStore({
    reducer: {
        eBooks: eBookSlice
    }
});

export default store;
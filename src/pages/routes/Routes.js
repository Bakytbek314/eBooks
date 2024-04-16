import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from '../home/Home';
import Favourites from '../../components/Favourites/Favourites';
import BookInfo from '../../components/Book-info/Book-info';
import Filter from '../../components/Filter/Filter';
import { getPopularBooks, getProgrammingBooks, getFilter} from '../../toolkit/slice/EbooksSlice';

const ComRoutes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularBooks());
        dispatch(getProgrammingBooks());
        dispatch(getFilter());
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='book/:genre/:id' element={<BookInfo />} />
            <Route path='books/favourites' element={<Favourites />} />
            <Route path='books/filter' element={<Filter />} />
        </Routes>
    );
}

export default ComRoutes;

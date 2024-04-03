import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BooksList from '../../components/Books-list/BooksList';
import List from '../../components/List/List';
import { getPopularBooks } from '../../toolkit/slice/EbooksSlice';

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const  {popularBooks} = useSelector((state) => state.eBooks);
    console.log("popularBooks>>>",popularBooks);

    return (
        <>
            <div className="container">
                <div className="populars">
                    <h3>Популярные книги</h3>
                    <div className="populars_content">
                        <List
                            books={popularBooks}
                            renderBooks={(elem, i) => (
                                <BooksList
                                    key={i} {...elem}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;

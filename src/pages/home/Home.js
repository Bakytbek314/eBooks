import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import s from "./Home.module.css";
import BooksList from '../../components/Books-list/BooksList';
import List from '../../components/List/List';
import { favouriteBooks } from '../../toolkit/slice/EbooksSlice';

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleInfo = (genre, id) => {
        navigate(`book/${genre}/${id}`);
    }

    const { popularBooks, programmingBooks } = useSelector((state) => state.eBooks);

    return (
        <>
            <div className="container">

                <div className={s.populars}>
                    <h2>Популярные книги</h2>
                    <div className={s.populars_content}>
                        <List
                            books={popularBooks}
                            renderBooks={(elem, i) => (
                                <BooksList
                                    key={i} {...elem}
                                    onClick={() => handleInfo(elem.genre, elem.id)}
                                    onAddFavourit={() => dispatch(favouriteBooks(elem))}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className={s.programming}>
                    <h2>Книги по программированнию</h2>
                    <div className={s.programming_content}>
                        <List
                            books={programmingBooks}
                            renderBooks={(elem, i) => (
                                <BooksList
                                    key={i} {...elem}
                                onClick={() => handleInfo(elem.genre, elem.id)}
                                onAddFavourit={() => dispatch(favouriteBooks(elem))}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

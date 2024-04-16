import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import s from "./Filter.module.css";
import List from '../List/List';
import BooksList from '../Books-list/BooksList';
import { favouriteBooks } from '../../toolkit/slice/EbooksSlice';

const Filter = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { filter } = useSelector((state) => state.eBooks);

    const err = () => {
        navigate("/");
    }

    const handleInfo = (genre, id) => {
        navigate(`book/${genre}/${id}`);
    }

    return (
        <section>
            <div className="container">
                <div className={s.filter}>
                    <h2>{filter.length > 0 && filter[0].genre}</h2>
                    <div className={s.filter_content}>
                        {
                            filter.length > 0 ? (
                                <List
                                    books={filter}
                                    renderBooks={(elem, i) => (
                                        <BooksList
                                            key={i} {...elem}
                                        onClick={() => handleInfo(elem.genre, elem.id)}
                                        onAddFavourit={() => dispatch(favouriteBooks(elem))}
                                        />
                                    )}
                                />
                            ) : err()
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filter;

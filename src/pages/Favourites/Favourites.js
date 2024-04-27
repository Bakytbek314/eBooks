import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import s from "./Favourites.module.css";
import List from '../../components/List/List';
import BooksList from '../../components/Books-list/BooksList';

const Favourites = () => {

    const navigate = useNavigate();

    const { favouriteBooks } = useSelector((state) => state.eBooks);

    const handleInfo = (genre, id) => {
        navigate(`book/${genre}/${id}`);
    }

    return (
        <div className="container">
            <div className={s.favourites}>
                <h2>Любимые книги</h2>
                <div className={s.favourites_content}>
                    {favouriteBooks.length > 0 ? (
                        <List
                            books={favouriteBooks}
                            renderBooks={(elem, i) => (
                                <BooksList
                                    key={i} {...elem}
                                    onClick={() => handleInfo(elem.genre, elem.id)}
                                />
                            )}
                        />
                    ) : (
                        <div style={{ height: "60vh" }}>
                            <h3>Здесь пока ничего нет</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Favourites;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import List from '../List/List';
import s from "./Book-info.module.css"
import { getInfoBook } from '../../toolkit/slice/EbooksSlice';

const BookInfo = () => {

    const dispatch = useDispatch();
    
    const { genre, id } = useParams();
    // const paramIsArr = [genre, id];

    const { infoBook } = useSelector((state) => state.eBooks);
    // const bookIsArr = [infoBook];

    useEffect(() => {
        dispatch(getInfoBook([genre, id]));
    }, []);

    return (
        <div className="container">
            <List
                books={[infoBook]}
                renderBooks={(elem, i) => (
                    <section key={i}>
                        <div className={s.book_info}>
                            <div className={s.photo}>
                                <img src={elem.img} alt="" />
                            </div>
                            <div className={s.info}>
                                <h2>{elem.title}</h2>
                                <p>Автор: {elem.autor}</p>
                                <p>Название: {elem.name}</p>
                                <h2>{elem.annotation}</h2>
                                <p>{elem.description}</p>
                                <p>{elem.fullDescription}</p>
                                <button className={s.download}><a href="#" download={1}>Скачать</a></button>
                            </div>
                        </div>
                    </section>
                )}
            />
        </div>
    )
}

export default BookInfo;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'

import List from '../../components/List/List';
import s from "./Book-info.module.css"
import { getInfoBook } from '../../toolkit/slice/EbooksSlice';
import doc from '../../Shared/pdf.pdf';

const BookInfo = () => {

    const dispatch = useDispatch();

    const { genre, id } = useParams();
    // const paramIsArr = [genre, id];

    const { infoBook } = useSelector((state) => state.eBooks);
    // const bookIsArr = [infoBook];

    useEffect(() => {
        dispatch(getInfoBook([genre, id]));
    }, []);

    const [bookIsOpen, setBookIsOpen] = useState(false);

    return (
        <div className="container">
            <List
                books={[infoBook]}
                renderBooks={(elem, i) => (
                    <section key={i}>
                        <div className={s.book_info}>
                            <div className={s.info}>
                                <h2>{elem.title}</h2>
                                <p><b>Автор:</b> {elem.autor}</p>
                                <p><b>Название:</b> {elem.name}</p>
                                <h2>{elem.annotation}</h2>
                                <p>{elem.description}</p>
                                <p>{elem.fullDescription}</p>
                                <button className={s.reading} onClick={() => setBookIsOpen(!bookIsOpen)}>{!bookIsOpen ? "Читать" : "Закрыть"}</button>
                            </div>
                            <div className={s.photo}>
                                <img src={elem.img} alt="" />
                            </div>
                        </div>

                        {bookIsOpen && (
                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '98vh',
                                }}
                            >
                                <Viewer fileUrl={doc} />
                            </div>
                        )}

                    </section>

                )}
            />
        </div>
    )
}

export default BookInfo;

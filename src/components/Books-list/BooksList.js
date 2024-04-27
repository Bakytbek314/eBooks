import React, { useState } from 'react';

import s from "./Books-list.module.css";
import HeartIcon from '../../Shared/Icons/Heart.svg';
import RedHeartIcon from '../../Shared/Icons/RedHeart.svg';

const BooksList = (props) => {
    const { img, name, onClick, onAddFavourit } = props;

    const handleHeartClick = () => {
        onAddFavourit();
        setHeart(!heart);
    };

    const [heart, setHeart] = useState(false);

    return (
        <div className={s.book_content} >
            <div className={s.photo}>
                <img src={img} alt="" />
            </div>
            <div className={s.content}>
                <div className={s.book_name}>
                    <p>{name}</p>
                </div>
                <button onClick={onClick}>Подробнее</button>
                <span onClick={handleHeartClick}><img src={!heart ? HeartIcon : RedHeartIcon} alt="" /></span>
            </div>
        </div>
    )
};

export default BooksList;

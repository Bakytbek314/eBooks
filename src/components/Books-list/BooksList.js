import React, { useState } from 'react';

import s from "./Books-list.module.css";

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
                <p>{name}</p>
                <button onClick={onClick}>Подробнее</button>
                <i
                    className="fa-sharp fa-solid fa-heart"
                    style={heart ? {color: "red"} : {color: "black"}}
                    onClick={handleHeartClick}
                ></i>
            </div>
        </div>
    )
};

export default BooksList;

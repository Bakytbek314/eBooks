import React from 'react'

const BooksList = (props) => {
    const {img, name} = props;
    return (
        <div className="book_content">
            <div className="photo">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <p>{name}</p>
                <i></i>
                <button>Подробное</button>
            </div>
        </div>
    )
}

export default BooksList;

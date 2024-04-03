import React from 'react';

const List = ({books, renderBooks}) => {
    return <>{books.map(renderBooks)}</>
}

export default List;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import s from "./Header.module.css";
import { getFilter } from '../../toolkit/slice/EbooksSlice';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFav = () => {
        navigate(`books/favourites`);
    }

    const [filterIsOpen, setFilterIsOpen] = useState(false);

    const option = ["popular", "programming"];
    const optionList = option.map((li, i) => (<li key={i} onClick={() => {
        dispatch(getFilter(li));
        navigate("books/filter")
    }}>{li}</li>));

    return (
        <header>
            <div className="container">
                <div className={s.navbar}>
                    <div className={s.logo}>
                        <Link to={"/"}><h1>eBooks</h1></Link>
                    </div>
                    <div className={s.nav}>
                        <div className={s.search}>
                            <form action="y
                            ">
                                <input type="text" name="" id="" />
                                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                            </form>

                        </div>
                        <div className={s.icons}>
                            <div className={s.sort}
                                onClick={() => setFilterIsOpen(!filterIsOpen)}
                            ><i className="fa-sharp fa-solid fa-filter"></i></div>
                            <div className={s.favorite}>
                                <i className="fa-sharp fa-solid fa-heart" onClick={() => handleFav()}></i>
                            </div>
                        </div>
                    </div>
                </div>
                {filterIsOpen && (<ul className={s.optionList}>{optionList}</ul>)}
            </div>
        </header>
    )
}

export default Header;

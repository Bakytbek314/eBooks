import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import s from "./Header.module.css";

import HeartIcon from '../../Shared/Icons/Heart.svg';
import SearchIcon from '../../Shared/Icons/Search.svg'

const Header = () => {

    const navigate = useNavigate();

    const handleFav = () => {
        navigate(`books/favourites`);
    }

    return (
        <header>
            <div className="container">
                <div className={s.navbar}>
                    <div className={s.logo}>
                        <Link to={"/"}><h1>eBooks</h1></Link>
                    </div>
                    <div className={s.nav}>
                        <div className={s.search}>
                                <span><img src={SearchIcon} alt="" /></span>
                                <input type="text" placeholder='Поиск'></input>
                        </div>
                        <div className={s.icons}>
                            <div className={s.favorite}>
                                <img src={HeartIcon} alt="" onClick={() => handleFav()}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

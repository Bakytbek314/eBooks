import React from 'react';

import s from "./Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={s.content}>
                    <h1>Сделано в цели обучение</h1>
                    <h2>Имеется много косяков</h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

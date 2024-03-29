import React from 'react';
import style from './Header.module.scss';
import Nav from "./nav/Nav";
import BurgerNav from "./burger-nav/BurgerNav";

function Header() {
    return (
        <div className={style.header}>
            <Nav />
            <BurgerNav />
        </div>
    );
}

export default Header;
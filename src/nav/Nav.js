import React from 'react';
import style from './Nav.module.scss';
import Fade from "react-reveal/Fade";

function Nav() {
    return (
        <Fade right cascade>
            <div className={style.nav}>
                <a href="">Home</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contacts</a>
            </div>
        </Fade>
    );
}

export default Nav;
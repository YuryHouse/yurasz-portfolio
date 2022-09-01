import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import Fade from "react-reveal/Fade";
import {Link} from "react-scroll";

function BurgerNav() {
    const[menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }
    return (
        <Fade top cascade>
            <div className={style.burgerNav}>
                <div className={menuIsOpen? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                    <Link activeClass={style.active}
                          to='home'
                          className={style.link}
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={0}
                          duration={500}
                    >Home</Link>
                    <Link activeClass={style.active}
                          to='about'
                          className={style.link}
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={0}
                          duration={500}
                    >About</Link>
                    <Link activeClass={style.active}
                          className={style.link}
                          to="contact"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={0}
                          duration={500}
                    >Contact</Link>
                    <Link activeClass={style.active}
                          className={style.link}
                          to="projects"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={0}
                          duration={500}
                    >Projects</Link>
                    <Link activeClass={style.active}
                          className={style.link}
                          to="skills"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={0}
                          duration={500}
                    >Skills</Link>
                </div>
                <div className={style.burgerBtn} onClick={onBurgerBtnClick}></div>
            </div>
        </Fade>
    );
}

export default BurgerNav;
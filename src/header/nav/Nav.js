import React from 'react';
import style from './Nav.module.scss';
import Fade from "react-reveal/Fade";
import {Link} from "react-scroll";

function Nav() {
    return (
        <Fade right cascade>
            <div className={style.nav}>
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
                <Link activeClass={style.active}
                      className={style.link}
                      to="contact"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={0}
                      duration={500}
                >Contacts</Link>
            </div>
        </Fade>
    );
}

export default Nav;
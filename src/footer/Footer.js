import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import FooterElement from "./footerElement/FooterElement";
import telegram from "../assets/icons/telegram.png"
import facebook from "../assets/icons/facebook.png"
import linkedin from "../assets/icons/linkedin.png"
import smallgithub from "../assets/icons/smallgithub.png"


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Yury Zhykharka</h2>
                <div className={style.footer}>
                    <FooterElement
                        href={'/'}
                        src={telegram}
                        alt={'telegram logo'}/>
                    <FooterElement
                        href={'/'}
                        src={facebook}
                        alt={'facebook logo'}/>
                    <FooterElement
                        href={'/'}
                        src={linkedin}
                        alt={'linkedin logo'}/>
                    <FooterElement
                        href={'/'}
                        src={smallgithub}
                        alt={'github logo'}/>
                </div>
                <span className={style.rights}>&copy; All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer
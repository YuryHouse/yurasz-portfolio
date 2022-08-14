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
                        href={'https://t.me/YuryHouse'}
                        src={telegram}
                        alt={'telegram logo'}/>
                    <FooterElement
                        href={'https://www.facebook.com/yurasz'}
                        src={facebook}
                        alt={'facebook logo'}/>
                    <FooterElement
                        href={'https://www.linkedin.com/in/yury-zhykharka-5ba37477/'}
                        src={linkedin}
                        alt={'linkedin logo'}/>
                    <FooterElement
                        href={'https://github.com/YuryHouse'}
                        src={smallgithub}
                        alt={'github logo'}/>
                </div>
                <span className={style.rights}>&copy; All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer
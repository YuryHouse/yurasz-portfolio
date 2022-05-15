import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'
import FooterElement from "./footerElement/FooterElement";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Yury Zhykharka</h2>
                <div className={style.footer}>
                    <FooterElement />
                    <FooterElement />
                    <FooterElement />
                    <FooterElement />
                </div>
                <span className={style.rights}>&copy; All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer
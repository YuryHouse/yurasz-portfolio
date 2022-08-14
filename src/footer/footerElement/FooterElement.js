import React from "react";
import style from './FooterElement.module.scss'

function FooterElement(props) {
    return <div className={style.footerElementBlock}>
        <a href={props.href} target={'_blank'}><img src={props.src} alt={props.alt}/></a>
    </div>
}

export default FooterElement;
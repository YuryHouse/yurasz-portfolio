import React from 'react';
import style from './Contact.module.css'
import Button from "../common/button/Button";
import styleContainer from "../common/styles/Container.module.css";

function Contact(props) {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contact me</h2>
                <form className={style.contact}>
                    <div><input type={"text"} /></div>
                    <div><input type={"text"} /></div>
                    <div><textarea></textarea></div>
                </form>
                <Button name={"Send"}/>
            </div>
        </div>
    );
}

export default Contact;
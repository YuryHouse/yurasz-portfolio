import React from 'react';
import style from './Contact.module.css'
import styleContainer from "../common/styles/Container.module.css";

function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contact me</h2>
                <form className={style.contact}>
                    <input type={"text"} />
                    <input type={"text"} />
                    <textarea />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
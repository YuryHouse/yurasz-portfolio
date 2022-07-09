import React from 'react';
import style from './Contact.module.scss';
import styleButton from '../common/styles/Button.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";

function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title name={'Contact me'}/>
                <form className={style.contact}>
                    <input type={"text"} />
                    <input type={"text"} />
                    <textarea />
                    <button className={`${styleButton.button}`} type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
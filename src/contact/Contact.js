import React from 'react';
import style from './Contact.module.scss';
import styleButton from '../common/styles/Button.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import Fade from "react-reveal/Fade";

function Contact() {
    return (
        <div className={style.contactBlock} id={'contact'}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title name={'Contact me'}/>
                <Fade right cascade>
                    <form className={style.contact}>
                        <input type={"text"}/>
                        <input type={"text"}/>
                        <textarea/>
                        <button className={`${styleButton.button}`} type="submit">Send</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contact;
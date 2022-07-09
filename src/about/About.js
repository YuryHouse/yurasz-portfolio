import React from 'react';
import style from './About.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import styleButton from '../common/styles/Button.module.scss'

function About() {
    return (
        <div className={style.aboutBlock}>
            <div className={`${styleContainer.container} ${style.aboutContainer}`}>
                <Title name={'About me'}/>
                <div className={style.buttonContainer}>
                    <button className={`${styleButton.button}`}>Download my CV</button>
                    <button className={`${styleButton.button}`}>See my CV</button>
                </div>
            </div>
        </div>
    );
}

export default About;
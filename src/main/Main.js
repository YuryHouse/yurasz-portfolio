import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {ParticleBackground} from "../common/components/particle-background/ParticleBackground";
import Fade from "react-reveal/Fade";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


function Main() {
    return (
        <div className={style.mainBlock} id={'home'}>
            <div className={style.particle}>
                <ParticleBackground/>
            </div>
            <div className={styleContainer.container}>
                <Fade left>
                    <div className={style.intro}>
                        <div>Hey There</div>
                        <span>I am Yury <span>Zhykharka</span></span>
                        <br/>
                        <ReactTypingEffect
                            text={['Front-end developer']}
                        />
                    </div>
                </Fade>
                <Fade right>
                    <Tilt className="Tilt" options={{ max : 25 }} >
                        <div className={style.photo}>
                            <div className={style.image}></div>
                        </div>
                    </Tilt>
                </Fade>
            </div>
        </div>
    );
}

export default Main;
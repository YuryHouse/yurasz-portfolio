import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.intro}>
                    <div>Hey There</div>
                    <span>I am Yury <span>Zhykharka</span></span>
                    <h1>Front-end developer</h1>
                </div>
                <div className={style.photo}>
                    <div className={style.image}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
import React from 'react';
import style from './Hiring.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";

function Hiring() {
    return (
        <div className={style.hiringBlock}>
            <div className={`${styleContainer.container} ${style.hiringContainer}`}>
                <Title name={'Looking to work remotely or relocate'}/>
                <div className={style.buttonContainer}>
                    <button>Hire мe</button>
                </div>
            </div>
        </div>
    );
}

export default Hiring;
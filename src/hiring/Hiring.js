import React from 'react';
import style from './Hiring.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Hiring() {
    return (
        <div className={style.hiringBlock}>
            <div className={`${styleContainer.container} ${style.hiringContainer}`}>
                <h2 className={style.title}>Looking to work remotely or relocate</h2>
                <div className={style.buttonContainer}>
                    <button>Hire мe</button>
                </div>
            </div>
        </div>
    );
}

export default Hiring;
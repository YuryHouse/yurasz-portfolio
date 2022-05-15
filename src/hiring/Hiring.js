import React from 'react';
import style from './Hiring.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Button from "../common/button/Button";

function Hiring(props) {
    return (
        <div className={style.hiringBlock}>
            <div className={`${styleContainer.container} ${style.hiringContainer}`}>
                <h2 className={style.title}>Looking to work remotely or relocate</h2>
                <Button name={'Hire мe'}/>
            </div>
        </div>
    );
}

export default Hiring;
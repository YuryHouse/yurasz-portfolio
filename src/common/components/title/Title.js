import React from 'react';
import style from './Title.module.scss';
import Fade from "react-reveal/Fade";


function Title(props) {
    return (
        <Fade bottom>
            <div className={style.title}>
                <h2>{props.name}</h2>
            </div>
        </Fade>
    );
}

export default Title;
import React from 'react';
import style from './Project.module.css';
import Button from "../../common/button/Button";


function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imageContainer}>
                <Button className={style.projectButton} name={'See more'}/>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Project
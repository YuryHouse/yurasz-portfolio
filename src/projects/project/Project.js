import React from 'react';
import style from './Project.module.scss';
import styleButton from '../../common/styles/Button.module.scss'


function Project(props) {
    return (
        <div className={style.project}>
            <div style={props.style} className={style.imageContainer}>
                <a className={`${styleButton.button}`} href={'/'}>{'See more'}</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Project
import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from "./../assets/image/todolist.jpg";
import socialImage from "./../assets/image/social.jpg";
import agencyImage from "./../assets/image/agency.jpg";
import Fade from "react-reveal/Fade";


function Projects() {
    const social = {
        backgroundImage: `url(${todoImage})`
    };
    const list = {
        backgroundImage: `url(${socialImage})`
    };
    const agency = {
        backgroundImage: `url(${agencyImage})`
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title name={"My Projects"}/>
                <Fade bottom>
                    <div className={style.projects}>
                        <Project
                            style={list}
                            title={'Social network'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                                'sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'}/>
                        <Project
                            style={social}
                            title={'Todolist'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                                'sed do eiusmod tempor incididuntut labore et dolore magna aliqua.Lorem' +
                                'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut' +
                                'labore et dolore magna aliqua.'}/>
                        <Project
                            style={agency}
                            title={'Estate agency'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Projects
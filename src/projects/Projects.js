import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from "./../assets/image/todolist.jpg";
import cardsImage from "./../assets/image/cardsImage.jpg"
import socialImage from "./../assets/image/social.jpg";
import agencyImage from "./../assets/image/agency.jpg";
import Fade from "react-reveal/Fade";


function Projects() {
    const social = {
        backgroundImage: `url(${todoImage})`
    };
    const cards = {
        backgroundImage: `url(${cardsImage})`
    };
    const list = {
        backgroundImage: `url(${socialImage})`
    };
    const agency = {
        backgroundImage: `url(${agencyImage})`
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}  id={'projects'}>
                <Title name={"My Projects"}/>
                <div className={style.projects}>
                    <Fade bottom>
                        <Project
                            style={list}
                            title={'Social network'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                                'sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'}/>
                        <Project
                            style={cards}
                            title={'Learning Cards'}
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
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Projects
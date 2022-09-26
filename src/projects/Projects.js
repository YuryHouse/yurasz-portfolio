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
            <div className={`${styleContainer.container} ${style.projectsContainer}`} id={'projects'}>
                <Title name={"My Projects"}/>
                <div className={style.projects}>
                    <Fade bottom>
                        <Project
                            style={list}
                            title={'Social Network'}
                            description={'This is a social network application containing the main functionality of modern social networks..'}
                            link={'https://github.com/YuryHouse/social-network-new'}/>
                        <Project
                            style={cards}
                            title={'Learning Cards'}
                            description={'This application was created for training on educational cards using the question-answer system.'}
                            link={'https://github.com/YuryHouse/learning-cards'}/>
                        <Project
                            style={social}
                            title={'Todolist'}
                            description={'This is a modern to-do list application.'}
                            link={'https://github.com/YuryHouse/todolist-ts-17'}/>
                        <Project
                            style={agency}
                            title={'Real Estate Agency'}
                            description={'This project is a one-page website of a real estate agency.'}
                            link={'https://github.com/YuryHouse/real-estate-agency'}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Projects
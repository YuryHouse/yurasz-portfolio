import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import antdesign from "../assets/icons/antdesign.png"
import axios from "../assets/icons/axios.png"
import css3 from "../assets/icons/css3.png"
import formik from "../assets/icons/formik.png"
import git from "../assets/icons/git.png"
import github from "../assets/icons/github.png"
import html5 from "../assets/icons/html5.png"
import js from "../assets/icons/js.png"
import mui from "../assets/icons/mui.png"
import postman from "../assets/icons/postman.png"
import react from "../assets/icons/react.png"
import redux from "../assets/icons/redux.png"
import sass from "../assets/icons/sass.png"
import storybook from "../assets/icons/storybook.png"
import ts from "../assets/icons/ts.png"


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title name = {"Skills"}/>
                <div className={style.skills}>
                    <Skill
                        src={antdesign}
                        alt={'ant design logo'}
                        title={'Ant Design'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={axios}
                        alt={'axios logo'}
                        title={'Axios'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={css3}
                        alt={'css3 logo'}
                        title={'CSS3'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={formik}
                        alt={'formik logo'}
                        title={'Formik'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={git}
                        alt={'git logo'}
                        title={'Git'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={github}
                        alt={'github logo'}
                        title={'GitHub'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={html5}
                        alt={'html5 logo'}
                        title={'HTML5'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={js}
                        alt={'js logo'}
                        title={'JavaScript'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={mui}
                        alt={'mui logo'}
                        title={'MaterialUI'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={postman}
                        alt={'postman logo'}
                        title={'Postman'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={react}
                        alt={'react logo'}
                        title={'React'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={redux}
                        alt={'redux logo'}
                        title={'Redux & Redux Toolkit'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={sass}
                        alt={'sass logo'}
                        title={'Sass'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={storybook}
                        alt={'storybook logo'}
                        title={'Storybook'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                    <Skill
                        src={ts}
                        alt={'ts logo'}
                        title={'TypeScript'}
                        description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.'} />
                </div>
            </div>
        </div>
    );
}

export default Skills
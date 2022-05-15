import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Hiring from "./hiring/Hiring";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className='App'>
            <Header />
            <Main />
            <Skills />
            <Projects />
            <Hiring/>
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className='App'>
            <Header />
            <Main />
            <About/>
            <Contact />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;

import {useEffect, useState} from "react";
import logo from '../assets/img/logo.svg';
import arrow from "../assets/img/arrow-left.svg";
import profile from '../assets/img/profile.png';

export const About = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateOffset = (direction = 'right') => {
        const speedMultiplier = 0.75;
        const offset = scrollPosition * speedMultiplier;
        return direction === 'right' ? offset : -offset;
    };

    return (
        <section className="about" id="about">
            <div className="grid-container">
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>

                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>

                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>

                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>

                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>

                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
            </div>
            <div className="resume-sliding-text">
                <h1
                    className="sliding-text-white"
                    style={{ transform: `translateX(${calculateOffset('right')}px)` }}>
                    About Me About Me About Me About Me About Me About Me</h1>
            </div>
            <div className="about-projects-container">
                <img className="about-arrow" src={arrow}/>
                <p className="about-text">Projects</p>
            </div>
            <div className="about-me-container">
                <p className="about-long-description">Hi, welcome to my portfolio website. My name is Ernst Robert. <br/><br/>Hands-on <span className="highlight">Full-Stack Software Engineer</span> and Computer Science Student, working on developing and optimising enterprise-level application features. I utilize complex solutions to build robust services, delivering high-standard results that enhances the final product.<br/><br/>Determined development solutions for app creation, including complex architecture, processing data & specialized scripts.</p>
                <p className="about-description">Hi, welcome to my portfolio website. My name is Ernst Robert. <br/><br/>Hands-on <span className="highlight">Full-Stack Software Engineer</span> and Computer Science Student, working on developing and optimising enterprise-level application features. I utilize complex solutions to build robust services, delivering high-standard results that enhances the final product.</p>
                <div className="about-images">
                    <img className="about-profile" src={profile}/>
                    <div className="about-flag">
                        <img src={logo}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
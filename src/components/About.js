import logo from '../assets/img/logo.svg';
import arrow from "../assets/img/arrow-left.svg";
import profile from '../assets/img/profile.png';
import {GridItems} from "./GridItems";
import {useParallaxScroll} from "../hooks/useParallaxScroll";

export const About = () => {
    const {calculateOffset} = useParallaxScroll();

    return (
        <section className="about" id="about">
            <GridItems />
            <div className="resume-sliding-text about-sliding-text">
                <h1
                    className="sliding-text-white"
                    style={{ transform: `translateX(${calculateOffset('right')}px)` }}>
                    About Me About Me About Me About Me About Me About Me</h1>
            </div>
            <div className="about-projects-container">
                <img className="about-arrow" src={arrow}/>
                <p className="about-text">Resume</p>
            </div>
            <div className="about-me-container">
                <p className="about-long-description">
                    Hi, welcome to my portfolio website. My name is Ernst Robert. 
                    <br/><br/>Hands-on <span className="highlight">Full-Stack Software Engineer</span>, 
                    working on developing and  optimizing enterprise-level applications for industry-leading 
                    companies in online gaming and betting. I enjoy building applications, solving problems, 
                    and finding practical solutions to technical challenges.<br/><br/>Determined development solutions 
                    for app creation, including complex architecture, processing data & specialized scripts.</p>
                <p className="about-description">
                    Hi, welcome to my portfolio website. My name is Ernst Robert. 
                    <br/><br/>Hands-on <span className="highlight">Full-Stack Software Engineer</span>, 
                    working on developing and  optimizing enterprise-level applications for industry-leading 
                    companies in online gaming and betting. I enjoy building applications, solving problems, 
                    and finding practical solutions to technical challenges.</p>
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
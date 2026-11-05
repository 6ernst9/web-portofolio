import arrow from "../assets/img/arrow-left.svg";
import profile from "../assets/img/profile.webp";
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
                <img className="about-arrow" src={arrow} alt=""/>
                <p className="about-text">Resume</p>
            </div>
            <div className="about-me-container">
                <div className="about-text-block">
                <p>Hi, welcome to my portfolio website. My name is Ernst Robert.</p>
                <p>Hands-on <span className="highlight">Full-Stack Software Engineer</span>,
                    working on developing and optimizing enterprise-level applications for industry-leading
                    companies in online gaming and betting. I enjoy building applications, solving problems,
                    and finding practical solutions to technical challenges.</p>
                <p>My specialities include a broad spectrum of backend and web technologies, such as
                    Java, Spring, Kafka, PostgreSQL, MongoDB, Redis, and React with TypeScript.</p>
                </div>
                <div className="about-photo">
                    <img src={profile} alt="Ernst Robert" loading="lazy" decoding="async"/>
                </div>
            </div>
        </section>
    )
}
import profile from "../../assets/img/photos/profile.webp";
import {HashLink} from "react-router-hash-link";
import {SlidingText} from "../../shared/SlidingText";
import "./About.css";

export const About = () => {
    return (
        <section className="about" id="about">
            <SlidingText wrapperClassName="about-sliding-text" className="sliding-text-white" direction="right">
                {"About Me About Me About Me About Me About Me About Me"}
            </SlidingText>
            <div className="about-me-container">
                <div className="about-text-block">
                <p className="about-intro">Hi, welcome to my portfolio website. My name is Ernst Robert.</p>
                <p>Hands-on <span className="highlight">Java Software Engineer</span>,
                    working on developing and optimizing enterprise-level applications for industry-leading
                    companies in online gaming and betting. I enjoy building applications, solving problems,
                    and finding practical solutions to technical challenges.</p>
                <HashLink className="section-button" to="/about">
                    <button className="vvd"><span>More about me</span></button>
                </HashLink>
                </div>
                <div className="about-photo">
                    <img src={profile} alt="Ernst Robert" loading="lazy" decoding="async"/>
                </div>
            </div>
        </section>
    )
}
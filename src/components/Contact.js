import {HashLink} from "react-router-hash-link";
import {useParallaxScroll} from "../hooks/useParallaxScroll";
import {GridPoints} from "./GridPoints";

export const Contact = () => {
    const {calculateOffset} = useParallaxScroll();

  return (
    <section className="contact" id="contact">
        <div className="resume-sliding-text">
            <h1
                className="contact-sliding-text"
                style={{ transform: `translateX(${calculateOffset('right')}px)` }}>
                Contact Me Contact Me Contact Me Contact Me Contact Me Contact Me Contact Me Contact Me Contact Me Contact Me</h1>
        </div>
        <div className="contact-container">
            <h1>Let's talk</h1>
            <p>Do you have a project you would like me to work on?<br/>Or perhaps a few questions?<br/>Contact me and I will be more than happy to assist you!</p>
            <HashLink to="mailto:rernst2002@gmail.com">
                <button className="vvd"><span>Send me a message</span></button>
            </HashLink>
            <div className="contact-links">
                <a href="https://github.com/6ernst9">Github</a>
                <a href="https://www.linkedin.com/in/robert-ernst-75b167240/">Linkedin</a>
                <a href="https://www.instagram.com/6ernst9/">Instagram</a>
                <a href="mailto:rernst2002@gmail.com">Email</a>
            </div>
        </div>
        <GridPoints wrapperClassName="contact-points" itemClassName="contact-point" />
    </section>
  )
}
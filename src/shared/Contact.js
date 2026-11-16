import {HashLink} from "react-router-hash-link";
import {SlidingText} from "./SlidingText";
import {GridPoints} from "./GridPoints";
import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
        <GridPoints wrapperClassName="contact-points" itemClassName="contact-point" />
        <SlidingText className="contact-sliding-text" direction="right">
            {"Contact Me Contact Me Contact Me Contact Me Contact Me Contact Me Contact Me Contact Me Contact Me Contact Me"}
        </SlidingText>
        <div className="contact-container">
            <h1>Let's talk</h1>
            <p>Do you have a project you would like me to work on?<br/>Or perhaps a few questions?<br/>Contact me and I will be more than happy to assist you!</p>
            <HashLink to="mailto:rernst2002@gmail.com">
                <button className="vvd"><span>Send me a message</span></button>
            </HashLink>
        </div>
        <div className="contact-bar">
            <div className="contact-links">
                <a href="https://github.com/6ernst9">GitHub</a>
                <a href="https://www.linkedin.com/in/robert-ernst-75b167240/">LinkedIn</a>
                <a href="https://www.instagram.com/6ernst9/">Instagram</a>
                <a href="mailto:rernst2002@gmail.com">Email</a>
            </div>
            <p className="contact-crafted">Crafted by <HashLink to="/about">Me</HashLink></p>
        </div>
    </section>
  )
}
import {HashLink} from "react-router-hash-link";
import arrow from '../assets/img/arrow-left.svg';
import {GridItems} from "./GridItems";
import {GridPoints} from "./GridPoints";

export const Banner = () => {
  return (
    <section className="banner" id="home">
        <div className="banner-container">
            <div className="banner-text">
                <h1>Hi, my name is<br/><span className={'namespace-title'}>Ernst Robert.</span></h1>
                <h2>Full-Stack Software Engineer <br/>based in <span className="highlight-title">Romania</span>.</h2>
            </div>
            <div className="banner-buttons">
                <HashLink to='#projects'>
                    <button className="vvd"><span>See my work</span></button>
                </HashLink>
                <HashLink to='#contact'>
                    <button className="vvd"><span>Contact Me</span></button>
                </HashLink>
            </div>
            <div className="banner-links">
                <a href="https://github.com/6ernst9">Github</a>
                <a href="https://www.linkedin.com/in/robert-ernst-75b167240/">Linkedin</a>
                <a href="https://www.instagram.com/6ernst9/">Instagram</a>
                <a href="mailto:rernst2002@gmail.com">Email</a>
            </div>
        </div>
        <div className="grid-decoration">
            <div className="banner-plus top-left"/>
            <div className="banner-plus top-right"/>
            <div className="banner-plus bottom-left"/>
            <div className="banner-plus bottom-right"/>
        </div>
            <GridItems />
            <GridPoints />
        <div className="about-container">
            <img className="about-arrow" src={arrow}/>
            <p className="about-text">About Me</p>
        </div>
    </section>
  )
}
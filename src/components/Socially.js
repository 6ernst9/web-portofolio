import {useEffect, useState} from "react";
import socially from '../assets/img/socialmedia.jpg';
import {HashLink} from "react-router-hash-link";
import arrow from "../assets/img/arrow-left2.svg";

export const Socially = () => {
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

    return(
        <section className="socially" id="socially">
            <div className="resume-sliding-text">
                <h1
                    className="socially-sliding-text"
                    style={{ transform: `translateX(${calculateOffset('right')}px)` }}>
                    Social Media/Social Media/Social Media/Social Media/Social Media/Social Media</h1>
            </div>
            <div className="socially-container">
                <div className="socially-photo">
                    <div className="mac-photo">
                        <div className="mac-header">
                            <div className="mac-button"/>
                            <div className="mac-button yellow-button"/>
                            <div className="mac-button green-button"/>
                        </div>
                        <img src={socially}/>
                    </div>
                </div>

                <div className="socially-description-container">
                    <p className="socially-description">Socially is a social media application, focusing on ephemeral messaging and multimedia sharing. Built with <span className="highlight">Spring microservices</span> architecture, this project showcases scalable, distributed system capabilities, facilitating real-time interactions and robust backend services. The application enables users to share photos and videos that disappear after viewing, maintaining a dynamic and secure user experience.</p>
                </div>
                <div className="socially-container-button">
                    <p>#microservices</p>
                    <HashLink to="https://github.com/6ernst9/social-media-microservices">
                        <button className="vvd"><span>View Source code</span></button>
                    </HashLink>
                </div>
            </div>
            <p className="socially-projects-number">1/3</p>
            <div className="socially-projects-container">
                <img className="about-arrow" src={arrow}/>
                <p>Projects</p>
            </div>
            <div className="grid-points socially-points">
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

            </div>
        </section>
    )
}
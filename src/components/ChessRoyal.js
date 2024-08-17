import {useEffect, useState} from "react";
import chess from '../assets/img/chess.jpg';
import chess2 from '../assets/img/chess2.jpg';
import {HashLink} from "react-router-hash-link";
import arrow from "../assets/img/arrow-left2.svg";

export const ChessRoyal = () => {
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
        <section className="chess-royal" id="chess-royal">
            <div className="resume-sliding-text">
                <h1
                    className="chess-royal-sliding-text"
                    style={{ transform: `translateX(${calculateOffset('right')}px)` }}>
                    Chess/Chess/Chess/Chess/Chess/Chess/Chess/Chess/Chess/Chess/Chess/Chess</h1>
            </div>
            <div className="socially-container">
                <div className="socially-photo">
                    <div className="mac-photos">
                        <div className="second-photo right-photo mobile-photo chess-royal-photo">
                            <div className="mobile-header"/>
                            <img src={chess}/>
                        </div>
                        <div className="mobile-photo chess-royal-photo">
                            <div className="mobile-header"/>
                            <img src={chess2}/>
                        </div>
                    </div>
                </div>
                <div className="chess-royal-container-button">
                    <p>#algorithm</p>
                    <HashLink to="https://github.com/6ernst9/chess-app">
                        <button className="vvd"><span>View Source code</span></button>
                    </HashLink>
                </div>
                <div className="socially-description-container">
                    <p className="chess-royal-description">Socially is a social media application, focusing on ephemeral messaging and multimedia sharing. Built with <span className="highlight">Spring microservices</span> architecture, this project showcases scalable, distributed system capabilities, facilitating real-time interactions and robust backend services. The application enables users to share photos and videos that disappear after viewing, maintaining a dynamic and secure user experience.</p>
                </div>
            </div>

            <p className="socially-projects-number">3/5</p>
            <div className="chess-royal-projects-container">
                <img className="about-arrow" src={arrow} alt="arrow-icon"/>
                <p>Projects</p>
            </div>
            <div className="grid-points chess-royal-points">
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
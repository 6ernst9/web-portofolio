import {useEffect, useRef, useState} from "react";
import chess from '../assets/img/chess.jpg';
import chess2 from '../assets/img/chess2.jpg';
import {HashLink} from "react-router-hash-link";
import arrow from "../assets/img/arrow-left2.svg";

export const ChessRoyal = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const [secondImageDimensions, setSecondImageDimensions] = useState({ width: 0, height: 0 });

    const imageRef = useRef(null);
    const secondImageRef = useRef(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (imageRef.current) {
                const { width, height } = imageRef.current.getBoundingClientRect();
                setImageDimensions({ width, height });
            }

            if(secondImageRef.current) {
                const { width, height } = secondImageRef.current.getBoundingClientRect();
                setSecondImageDimensions({ width, height });
            }
        };

        updateDimensions();

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('resize', updateDimensions);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    const borderRadius = Math.min(imageDimensions.width, imageDimensions.height) * 0.2;
    const headerHeight = imageDimensions.height * 0.04;

    const secondBorderRadius = Math.min(secondImageDimensions.width, secondImageDimensions.height) * 0.2;
    const secondHeaderHeight = secondImageDimensions.height * 0.04;

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
                        <div className="second-photo right-photo mobile-photo chess-royal-photo"
                             style={{
                                 borderRadius: `${borderRadius}px`,
                                 border: `${borderRadius * 0.2}px solid black`,
                                 marginRight: `-${secondBorderRadius * 0.5}px`,
                             }}>
                            <div className="mobile-header"
                                 style={{
                                     height: `${headerHeight}px`,
                                     borderRadius: `0 0 ${borderRadius * 0.25}px ${borderRadius * 0.25}px`,
                                 }}/>
                            <img ref={imageRef} src={chess}/>
                        </div>
                        <div className="mobile-photo chess-royal-photo"
                             style={{
                                 borderRadius: `${secondBorderRadius}px`,
                                 border: `${secondBorderRadius * 0.2}px solid black`,
                             }}>
                            <div className="mobile-header"
                                 style={{
                                     height: `${secondHeaderHeight}px`,
                                     borderRadius: `0 0 ${secondBorderRadius * 0.25}px ${secondBorderRadius * 0.25}px`,
                                 }}/>
                            <img ref={secondImageRef} src={chess2}/>
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
                    <p className="chess-royal-description">Chess Royale is a feature-rich chess app designed to elevate your playing experience, whether you're competing online or engaging in a local 2-player match. With a variety of game modes, including Blitz, Classic, Rapid 10, and more, Chess Royale caters to both fast-paced and traditional gameplay styles. Beyond just playing, Chess Royale offers detailed analytics on your matches, helping you to track your progress, analyze your strategies, and improve over time.</p>
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
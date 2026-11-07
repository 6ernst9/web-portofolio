import {useEffect, useState} from "react";
import flag from '../../assets/img/photos/flag.webp';
import cesar from '../../assets/img/photos/iulius-cesar.webp';
import cesarLight from '../../assets/img/photos/iulius-cesar-light.webp';
import file from '../../assets/img/icons/file (1).svg';
import fileFill from '../../assets/img/icons/file.svg';
import portofolioPdf from "../../assets/Resume.pdf"
import { saveAs } from 'file-saver';
import {useParallaxScroll} from "../../hooks/useParallaxScroll";
import {useCursorParallax} from "../../hooks/useCursorParallax";
import {useTheme} from "../../hooks/useTheme";
import "./Resume.css";
import "../../shared/SlidingText.css";

export const Resume = () => {
  const {theme} = useTheme();
    const cursorRef = useCursorParallax();
    const {calculateOffset} = useParallaxScroll();
    const [fileSrc, setFileSrc] = useState(file);
    const [viewportWidth, setViewportWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );
    const radius = 370 > 0.9 * viewportWidth ? viewportWidth / 2 * 0.9 : 185;
    const diameter = radius * 2;
    const characters = 'check my resume.check my resume.check my resume.'.split('');
    const angleIncrement = 360 / characters.length;

    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleDownload = () => {
        saveAs(portofolioPdf, 'ernst-robert-resume.pdf');
    }

    return (
        <section className="resume" style={{"--circle": `${diameter}px`}} ref={cursorRef}>
            <div className="resume-sliding-text resume-name">
                <h1
                    className="sliding-text"
                    style={{ transform: `translateX(${calculateOffset('left')}px)` }}>
                    ERNST ROBERT ERNST ROBERT ERNST ROBERT ERNST ROBERT</h1>
                <h1
                    className="sliding-text second-text"
                    style={{ transform: `translateX(${calculateOffset('right')}px)` }}>
                    ERNST ROBERT ERNST ROBERT ERNST ROBERT ERNST ROBERT</h1>
                <h1
                    className="sliding-text mobile-text second-text"
                    style={{ transform: `translateX(${calculateOffset('left')}px)` }}>
                    ERNST ROBERT ERNST ROBERT ERNST ROBERT ERNST ROBERT</h1>
                <h1
                    className="sliding-text second-text mobile-text"
                    style={{ transform: `translateX(${calculateOffset('right')}px)` }}>
                    ERNST ROBERT ERNST ROBERT ERNST ROBERT ERNST ROBERT</h1>
            </div>
            <div
                className="resume-circle-container"
                style={{ width: diameter, height: diameter }}
                onMouseEnter={() => setFileSrc(fileFill)}
                onMouseLeave={() => setFileSrc(file)}
                onClick={handleDownload}>
                <img className="resume-file" src={fileSrc} alt=""/>
                <div className="circle-text">
                    {characters.map((char, index) => {
                        const angle = angleIncrement * index;
                        return (
                            <span
                                key={index}
                                style={{
                                    transform: `rotate(${angle}deg) translate(-50%, -${radius}px)`,
                                }}>{char}</span>
                        );
                    })}
                </div>
            </div>
            <div className="resume-stage">
                <img className="resume-flag" src={flag} alt="" loading="lazy" decoding="async"/>
                <img className="iulius-cesar" src={theme === "light" ? cesarLight : cesar} alt="" loading="lazy" decoding="async"/>
            </div>
        </section>
    )
}
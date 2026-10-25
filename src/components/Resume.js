import {useEffect, useState} from "react";
import flag from '../assets/img/flag.png';
import cesar from '../assets/img/iulius-cesar.png';
import arrow from "../assets/img/arrow-left.svg";
import file from '../assets/img/file (1).svg';
import fileFill from '../assets/img/file.svg';
import portofolioPdf from "../assets/Resume.pdf"
import { saveAs } from 'file-saver';
import {GridItems} from "./GridItems";
import {FirmsStrip} from "./FirmsStrip";
import {useParallaxScroll} from "../hooks/useParallaxScroll";
import {useCursorParallax} from "../hooks/useCursorParallax";

export const Resume = () => {
    // Photos / statue drift slowly against the cursor (App.css, "Cursor parallax")
    const cursorRef = useCursorParallax();
    const {calculateOffset} = useParallaxScroll();
    const [fileSrc, setFileSrc] = useState(file);
    // Track viewport width in state (updated on resize) instead of reading
    // window.innerWidth directly during render — reading it inline meant
    // this literally couldn't respond to orientation changes without a
    // full remount, and touched window on every re-render.
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
            <GridItems />
            <div className="resume-sliding-text resume-name">
                <h1
                    className="sliding-text"
                    style={{ transform: `translateX(${calculateOffset('right')}px)` }}>
                    ERNST ROBERT ERNST ROBERT ERNST ROBERT ERNST ROBERT</h1>
                <h1
                    className="sliding-text second-text"
                    style={{ transform: `translateX(${calculateOffset('left')}px)` }}>
                    ERNST ROBERT ERNST ROBERT ERNST ROBERT ERNST ROBERT</h1>
                {/* Rows 3 and 4 only show on screens up to 1025px (see .mobile-text in App.css) */}
                <h1
                    className="sliding-text mobile-text second-text"
                    style={{ transform: `translateX(${calculateOffset('right')}px)` }}>
                    ERNST ROBERT ERNST ROBERT ERNST ROBERT ERNST ROBERT</h1>
                <h1
                    className="sliding-text second-text mobile-text"
                    style={{ transform: `translateX(${calculateOffset('left')}px)` }}>
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
                <img className="iulius-cesar" src={cesar} alt="" loading="lazy" decoding="async"/>
            </div>
            <div className="resume-about-container">
                <img className="about-arrow" src={arrow} alt=""/>
                <p className="about-text">Experience</p>
            </div>
            <FirmsStrip className="resume-firms" />
        </section>
    )
}
import {useEffect, useState} from "react";
import thesis1 from '../assets/img/thesis.png';
import {HashLink} from "react-router-hash-link";
import arrow from "../assets/img/arrow-left2.svg";

export const Thesis = () => {
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
        <section className="vendify" id="vendify">
            <div className="resume-sliding-text">
                <h1
                    className="vendify-sliding-text"
                    style={{ transform: `translateX(${calculateOffset('right')}px)` }}>
                    Vendify/Vendify/Vendify/Vendify/Vendify/Vendify/Vendify/Vendify/Vendify/Vendify/Vendify/Vendify</h1>
            </div>
            <div className="socially-container">
                <div className="socially-photo">
                    <div className="mac-photo">
                        <div className="mac-header">
                            <div className="mac-button"/>
                            <div className="mac-button yellow-button"/>
                            <div className="mac-button green-button"/>
                        </div>
                        <img src={thesis1}/>
                    </div>
                </div>
                <div className="socially-description-container">
                    <p className="vendify-description">Vendify is a modern eCommerce platform built to simplify the creation and management of online stores for entrepreneurs and small businesses. Whether you're launching a boutique brand or managing multiple shops, Vendify offers a streamlined dashboard, customizable themes, and intuitive product management tools. With built-in analytics, session tracking, and promotional features like discounts and highlights, Vendify empowers users to grow their presence and make data-informed decisions—without needing technical expertise.</p>
                </div>
                <div className="vendify-container-button">
                    <p>#thesis</p>
                    <HashLink to="https://github.com/6ernst9/vendify">
                        <button className="vvd"><span>View Source code</span></button>
                    </HashLink>
                </div>
            </div>

            <p className="socially-projects-number">3/3</p>
            <div className="vendify-projects-container">
                <img className="about-arrow" src={arrow} alt="arrow-icon"/>
                <p>Projects</p>
            </div>
            <div className="grid-points vendify-points">
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>
                <div className="grid-point"></div>

                <div className="grid-point"></div>
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
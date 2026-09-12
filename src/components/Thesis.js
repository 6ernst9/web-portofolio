import vendify1 from '../assets/img/vendify1.png';
import {HashLink} from "react-router-hash-link";
import arrow from "../assets/img/arrow-left2.svg";
import {useParallaxScroll} from "../hooks/useParallaxScroll";
import {GridPoints} from "./GridPoints";

export const Thesis = () => {
    const {calculateOffset} = useParallaxScroll();

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
                        <img src={vendify1}/>
                    </div>
                </div>
                <div className="socially-description-container">
                    <p className="vendify-description">Vendify is a modern eCommerce platform built to simplify the creation and management of online stores for entrepreneurs and small businesses. Whether you're launching a boutique brand or managing multiple shops, Vendify offers a streamlined dashboard, customizable themes, and intuitive product management tools. With built-in analytics, session tracking, and promotional features like discounts and highlights, Vendify empowers users to grow their presence and make data-informed decisions—without needing technical expertise.</p>
                </div>
                <div className="vendify-container-button">
                    <p>#thesis</p>
                    <HashLink to="https://github.com/6ernst9/vendify" target="_blank" rel="noreferrer">
                        <button className="vvd"><span>View Source code</span></button>
                    </HashLink>
                </div>
            </div>

            <p className="socially-projects-number">3/3</p>
            <div className="vendify-projects-container">
                <img className="about-arrow" src={arrow} alt="arrow-icon"/>
                <p>Projects</p>
            </div>
            <GridPoints wrapperClassName="vendify-points" />
        </section>
    )
}
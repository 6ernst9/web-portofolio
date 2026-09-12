import romaniawarlords1 from '../assets/img/romaniawarlords1.png';
import arrow from "../assets/img/arrow-left2.svg";
import {HashLink} from "react-router-hash-link";
import {useParallaxScroll} from "../hooks/useParallaxScroll";
import {GridPoints} from "./GridPoints";

export const Warlords = () => {
    const {calculateOffset} = useParallaxScroll();

    return(
        <section className="warlords" id="warlords">
            <div className="resume-sliding-text">
                <h1
                    className="warlords-sliding-text"
                    style={{ transform: `translateX(${calculateOffset('right')}px)` }}>
                    Romania Warlords/Romania Warlords/Romania Warlords/Romania Warlords/Romania Warlords
                </h1>
            </div>

            <div className="socially-container">
                <div className="warlords-description-container">
                    <p className="warlords-description">
                        Romania Warlords is a hub for the biggest Clash Royale clan family in Romania, built to
                        keep members connected to live, real clan data instead of static info. Built
                        with <span className="highlight">React, Tailwind and Supabase</span>, the site
                        syncs clan and player standings from the Clash Royale API on a schedule, so
                        rankings and online member counts stay current. With per-clan detail pages and
                        full Romanian/English support, every member can see exactly where their clan
                        stands.
                    </p>
                </div>

                <div className="warlords-photo">
                    <div className="mac-photo">
                        <div className="mac-header">
                            <div className="mac-button"/>
                            <div className="mac-button yellow-button"/>
                            <div className="mac-button green-button"/>
                        </div>
                        <img src={romaniawarlords1} alt="Romania Warlords website"/>
                    </div>
                </div>

                <div className="warlords-container-button">
                    <p>#gaming</p>
                    <HashLink to="https://romaniawarlords.ro" target="_blank" rel="noreferrer">
                        <button className="vvd">
                            <span>View Website</span>
                        </button>
                    </HashLink>
                </div>
            </div>

            <p className="socially-projects-number">4/4</p>

            <div className="warlords-projects-container">
                <img className="about-arrow" src={arrow} alt="arrow-icon"/>
                <p>Projects</p>
            </div>

            <GridPoints wrapperClassName="warlords-points" />
        </section>
    )
}
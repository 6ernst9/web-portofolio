import casarosa from "../assets/img/casarosa.png";
import arrow from "../assets/img/arrow-left2.svg";
import { useParallaxScroll } from "../hooks/useParallaxScroll";
import { GridPoints } from "./GridPoints";
import {useCursorParallax} from "../hooks/useCursorParallax";

export const CasaRosa = () => {
    // Photos / statue drift slowly against the cursor (App.css, "Cursor parallax")
    const cursorRef = useCursorParallax();
    const { calculateOffset } = useParallaxScroll();

    return (
        <section className="casa-rosa" id="casa-rosa" ref={cursorRef}>
            <div className="resume-sliding-text">
                <h1
                    className="casa-rosa-sliding-text"
                    style={{
                        transform: `translateX(${calculateOffset("left")}px)`,
                    }}
                >
                    Casa Rosa/Casa Rosa/Casa Rosa/Casa Rosa/Casa Rosa
                </h1>
            </div>

            <div className="socially-container">
                <div className="casa-rosa-photo">
                    <div className="mac-photo">
                        <div className="mac-header">
                            <div className="mac-button" />
                            <div className="mac-button yellow-button" />
                            <div className="mac-button green-button" />
                        </div>
                        <img
                            src={casarosa}
                            alt="Casa Rosa holiday accommodation website in Salento"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>

                <div className="casa-rosa-description-container">                                
                    <p className="casa-rosa-description description-full">
                        Casa Rosa is a custom <span className="highlight">React</span> website for a
                        holiday property in Salento, Italy, with three apartments of different sizes.
                        Each apartment has its own photo gallery, and the site is available in Italian
                        and English with light and dark themes. Visitors pick their dates and are sent
                        to Booking.com to book. I also built a private
                        <span className="highlight"> admin panel</span> with
                        <span className="highlight"> visit tracking and website analytics</span>,
                        so the owner can follow traffic and visitor activity.
                        </p>
                    
                    <p className="casa-rosa-description description-mobile">
                        A custom <span className="highlight">React</span> website for a holiday
                        property in Salento, Italy, with three apartments, Italian/English support
                        and a Booking.com availability search. It also includes a private
                        <span className="highlight"> admin panel</span> with
                        <span className="highlight"> visit tracking and website analytics</span>,
                        so the owner can follow visitor activity.
                        </p>
                </div>

                <div className="casa-rosa-container-button">
                    <p>#holidaybnb</p>
                    <a
                        href="https://casarosaholiday.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="vvd">
                            <span>View Website</span>
                        </button>
                    </a>
                </div>
            </div>

            <p className="socially-projects-number">4/4</p>

            <div className="casa-rosa-projects-container">
                <img
                    className="about-arrow"
                    src={arrow}
                    alt=""
                />
                <p>Projects</p>
            </div>

            <GridPoints wrapperClassName="casa-rosa-points" />
        </section>
    );
};

import casarosa from "../assets/img/casarosa.png";
import arrow from "../assets/img/arrow-left2.svg";
import { useParallaxScroll } from "../hooks/useParallaxScroll";
import { GridPoints } from "./GridPoints";

export const CasaRosa = () => {
    const { calculateOffset } = useParallaxScroll();

    return (
        <section className="casa-rosa" id="casa-rosa">
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
                        />
                    </div>
                </div>

                <div className="casa-rosa-description-container">                                
                    <p className="casa-rosa-description description-full">
                        Casa Rosa is a custom <span className="highlight">React</span> website
                        developed for a holiday accommodation in Salento, Italy. It features a
                        responsive design that helps visitors explore the property and its
                        amenities across devices. I also implemented a private
                        <span className="highlight"> admin panel</span> with
                        <span className="highlight"> visit tracking and website analytics</span>,
                        allowing the administrator to monitor traffic and visitor activity
                        through dedicated statistics.
                        </p>
                    
                    <p className="casa-rosa-description description-mobile">
                        A custom <span className="highlight">React</span> website for a holiday
                        accommodation in Salento, Italy, featuring a responsive design and an
                        intuitive browsing experience. It also includes a private
                        <span className="highlight"> admin panel</span> with
                        <span className="highlight"> visit tracking and website analytics</span>.
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
                    alt="arrow-icon"
                />
                <p>Projects</p>
            </div>

            <GridPoints wrapperClassName="casa-rosa-points" />
        </section>
    );
};

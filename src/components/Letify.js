import {useEffect, useState} from "react";
import banking from "../assets/img/banking.jpg";
import banking2 from "../assets/img/banking2.jpg";
import {HashLink} from "react-router-hash-link";
import arrow from "../assets/img/arrow-left2.svg";

export const Letify = () => {
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

  return (
    <section className="letify" id="letify">
      <div className="resume-sliding-text">
        <h1
            className="letify-sliding-text"
            style={{ transform: `translateX(${calculateOffset('left')}px)` }}>
          Banking/Banking/Banking/Banking/Banking/Banking/Banking/Banking</h1>
      </div>
      <div className="socially-container">
          <div className="letify-photo">
              <div className="mac-photos">
                  <div className="mobile-photo">
                      <div className="mobile-header"/>
                      <img src={banking}/>
                  </div>
                  <div className="second-photo mobile-photo">
                      <div className="mobile-header"/>
                      <img src={banking2}/>
                  </div>
              </div>
          </div>
          <div className="letify-description-container">
              <p className="letify-description">Letify is a social media application, focusing on ephemeral messaging and multimedia sharing. Built with <span className="highlight">Spring microservices</span> architecture, this project showcases scalable, distributed system capabilities, facilitating real-time interactions and robust backend services. The application enables users to share photos and videos that disappear after viewing, maintaining a dynamic and secure user experience.</p>
          </div>
          <div className="socially-container-button">
              <p>#ui/ux</p>
              <HashLink to="https://github.com/6ernst9/banking-frontend-mobile">
                  <button className="vvd"><span>View Source code</span></button>
              </HashLink>
          </div>
      </div>

        <p className="socially-projects-number">2/5</p>
        <div className="letify-projects-container">
            <img className="about-arrow" src={arrow}/>
            <p>Projects</p>
        </div>
        <div className="grid-points letify-points">
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>

            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>

            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>

            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>

            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>

            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>

            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>

            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>

            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>

            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>

            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>

            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>
            <div className="grid-point"></div>

            <div className="grid-point"></div>
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
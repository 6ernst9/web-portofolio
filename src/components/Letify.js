import {useEffect, useRef, useState} from "react";
import banking from "../assets/img/banking.jpg";
import banking2 from "../assets/img/banking2.jpg";
import {HashLink} from "react-router-hash-link";
import arrow from "../assets/img/arrow-left2.svg";
import {useParallaxScroll} from "../hooks/useParallaxScroll";
import {GridPoints} from "./GridPoints";

export const Letify = () => {
  const {calculateOffset} = useParallaxScroll();

  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [secondImageDimensions, setSecondImageDimensions] = useState({ width: 0, height: 0 });

  const imageRef = useRef(null);
  const secondImageRef = useRef(null);

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

  useEffect(() => {
      updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const borderRadius = Math.min(imageDimensions.width, imageDimensions.height) * 0.2;
  const headerHeight = imageDimensions.height * 0.04;

  const secondBorderRadius = Math.min(secondImageDimensions.width, secondImageDimensions.height) * 0.2;
  const secondHeaderHeight = secondImageDimensions.height * 0.04;

  return (
    <section className="letify" id="letify">
      <div className="resume-sliding-text">
        <h1
            className="letify-sliding-text"
            style={{ transform: `translateX(${calculateOffset('left')}px)` }}>
          Letify/Letify/Letify/Letify/Letify/Letify/Letify/Letify</h1>
      </div>
      <div className="socially-container">
          <div className="letify-photo">
              <div className="mac-photos">
                  <div className="mobile-photo"
                       style={{
                           borderRadius: `${borderRadius}px`,
                           border: `${borderRadius * 0.2}px solid black`,
                       }}>
                      <div className="mobile-header"
                           style={{
                               height: `${headerHeight}px`,
                               borderRadius: `0 0 ${borderRadius * 0.25}px ${borderRadius * 0.25}px`,
                           }}/>
                      <img ref={imageRef} src={banking} onLoad={updateDimensions}/>
                  </div>
                  <div className="second-photo mobile-photo"
                       style={{
                           borderRadius: `${secondBorderRadius}px`,
                           border: `${secondBorderRadius * 0.2}px solid black`,
                           marginLeft: `-${secondBorderRadius * 0.5}px`,
                       }}>
                      <div className="mobile-header"
                           style={{
                               height: `${secondHeaderHeight}px`,
                               borderRadius: `0 0 ${secondBorderRadius * 0.25}px ${secondBorderRadius * 0.25}px`,
                           }}/>
                      <img ref={secondImageRef} src={banking2} onLoad={updateDimensions}/>
                  </div>
              </div>
          </div>
          <div className="letify-description-container">
              <p className="letify-description">Letify is a comprehensive mobile banking application designed to simplify and secure your financial transactions. With Letify, users can seamlessly manage their finances, including making transfers, withdrawals, and applying for credits, all within a user-friendly interface. Built with robust security features and real-time processing, Letify ensures that your banking needs are met quickly and safely, whether you're managing personal accounts or handling business finances.</p>
          </div>
          <div className="socially-container-button">
              <p>#banking</p>
              <HashLink to="https://github.com/6ernst9/banking-frontend-mobile" target="_blank" rel="noreferrer">
                  <button className="vvd"><span>View Source code</span></button>
              </HashLink>
          </div>
      </div>

        <p className="socially-projects-number">2/4</p>
        <div className="letify-projects-container">
            <img className="about-arrow" src={arrow}/>
            <p>Projects</p>
        </div>
        <GridPoints wrapperClassName="letify-points" />
    </section>
  )
}
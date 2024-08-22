import admin1 from "../assets/img/adminproject1.jpg";
import admin2 from "../assets/img/adminproject2.jpg";
import admin3 from "../assets/img/adminproject3.jpg";
import chess1 from "../assets/img/chessproject1.jpg";
import chess2 from "../assets/img/chessproject2.jpg";
import chess3 from "../assets/img/chessproject3.jpg";
import casino1 from "../assets/img/casinoproject1.jpg";
import casino2 from "../assets/img/casinoproject2.jpg";
import casino3 from "../assets/img/casinoproject3.jpg";
import resell1 from "../assets/img/resellproject1.jpg";
import resell2 from "../assets/img/resellproject2.jpg";
import resell3 from "../assets/img/resellproject3.jpg";
import admin from "../assets/img/admin.jpg";
import banking1 from '../assets/img/bankingproject1.jpg'
import banking2 from '../assets/img/bankingproject2.jpg'
import banking3 from '../assets/img/bankingproject3.jpg'
import hotel from "../assets/img/hotelapp.jpg";
import socialmedia from "../assets/img/socialmedia.jpg";
import gymapp from "../assets/img/gymapp.jpg";

import 'animate.css';
import {useEffect, useRef} from "react";
import {HashLink} from "react-router-hash-link";

export const Projects = () => {
  const imageWrapperRef = useRef(null);
  const speedMultiplier = 0.75;

  useEffect(() => {
    let offset = 0;

    const slideImages = () => {
      offset -= speedMultiplier;
      if (imageWrapperRef.current) {
        imageWrapperRef.current.style.transform = `translateX(${offset}px)`;

        if (Math.abs(offset) >= imageWrapperRef.current.scrollWidth) {
          offset = window.innerWidth;
        }
      }
    };

    const intervalId = setInterval(slideImages, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="project" id="projects">
      <div className="project-container">
        <div className="text-container">
          <h1>Projects</h1>
          <p>Check below my other personal projects that I worked on.<br/>All the projects are chosen because of their challenging problem-solving skills required.</p>
        </div>
        <div className="image-container">
          <div className="image-wrapper" ref={imageWrapperRef}>
            <img src={admin1} alt="Image 1" />
            <img src={chess1} alt="Image 1" />
            <img src={socialmedia} alt="Image 1" />
            <img src={banking1} alt="Image 1" />
            <img src={casino1} alt="Image 1" />
            <img src={gymapp} alt="Image 1" />
            <img src={admin2} alt="Image 1" />
            <img src={chess2} alt="Image 1" />
            <img src={admin} alt="Image 1" />
            <img src={casino3} alt="Image 1" />
            <img src={resell1} alt="Image 1" />
            <img src={hotel} alt="Image 1" />
            <img src={casino2} alt="Image 1" />
            <img src={admin3} alt="Image 1" />
            <img src={gymapp} alt="Image 1" />
            <img src={chess3} alt="Image 1" />
            <img src={resell2} alt="Image 1" />
            <img src={socialmedia} alt="Image 1" />
            <img src={banking3} alt="Image 1" />
            <img src={resell3} alt="Image 1" />
          </div>
      </div>
        <HashLink to="https://github.com/6ernst9?tab=repositories">
          <button className="vvd"><span>View Github projects</span></button>
        </HashLink>
      </div>
       <div className="grid-points projects-points">
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>

         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>

         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>

         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>

         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>

         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>

         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>

         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>

         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>

         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>

         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>

         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>
         <div className="grid-point"></div>

         <div className="grid-point"></div>
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
      <div className="grid-container">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>

    </section>
  )
}
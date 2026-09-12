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
import banking3 from '../assets/img/bankingproject3.jpg'
import hotel from "../assets/img/hotelapp.jpg";
import socialmedia from "../assets/img/socialmedia.jpg";
import thesis1 from "../assets/img/vendify1.png";
import thesis2 from "../assets/img/vendify2.png";
import romaniawarlords1 from "../assets/img/romaniawarlords1.png";
import romaniawarlords2 from "../assets/img/romaniawarlords2.png";

import 'animate.css';
import {useEffect, useRef} from "react";
import {HashLink} from "react-router-hash-link";
import {GridItems} from "./GridItems";
import {GridPoints} from "./GridPoints";

// Order preserved exactly as the original hand-written <img> list.
const projectImages = [
  admin1, chess1, socialmedia, banking1, romaniawarlords2, casino1, thesis1, admin2, chess2,
  admin, casino3, resell1, romaniawarlords1, hotel, casino2, admin3, thesis2, chess3,
  resell2, socialmedia, banking3, resell3,
];

export const Projects = () => {
  const imageWrapperRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;
      requestAnimationFrame(() => {
        const speedMultiplier = 0.75;
        const offset = Math.max(0, window.scrollY) * speedMultiplier;

        if (imageWrapperRef.current) {
          imageWrapperRef.current.style.transform = `translateX(${-offset}px)`;
        }
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
            {projectImages.map((src, i) => (
              <img src={src} alt="Image 1" key={i} />
            ))}
          </div>
      </div>
        <HashLink to="https://github.com/6ernst9?tab=repositories">
          <button className="vvd"><span>View Github projects</span></button>
        </HashLink>
      </div>
      <GridPoints wrapperClassName="projects-points" />
      <GridItems />
    </section>
  )
}
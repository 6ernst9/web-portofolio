import admin1 from "../assets/img/adminproject1.jpg";
import admin2 from "../assets/img/adminproject2.jpg";
import admin3 from "../assets/img/adminproject3.jpg";
import chess1 from "../assets/img/chess1.jpg";
import chess2 from "../assets/img/chess2.jpg";
import chess3 from "../assets/img/chess3.jpg";
import casino1 from "../assets/img/casinoproject1.jpg";
import casino2 from "../assets/img/casinoproject2.jpg";
import casino3 from "../assets/img/casinoproject3.jpg";
import resell1 from "../assets/img/resellproject1.jpg";
import resell2 from "../assets/img/resellproject2.jpg";
import resell3 from "../assets/img/resellproject3.jpg";
import banking1 from '../assets/img/banking1.jpg'
import banking2 from '../assets/img/banking2.jpg'
import casarosa from "../assets/img/casarosa.png";
import casarosa2 from "../assets/img/casarosa2.png";
import socialmedia from "../assets/img/socialmedia.jpg";
import thesis1 from "../assets/img/vendify1.png";
import thesis2 from "../assets/img/vendify2.png";
import romaniawarlords1 from "../assets/img/romaniawarlords1.png";
import romaniawarlords2 from "../assets/img/romaniawarlords2.png";

import {HashLink} from "react-router-hash-link";
import {GridItems} from "./GridItems";
import {GridPoints} from "./GridPoints";
import {InfiniteStrip} from "./InfiniteStrip";

// Order preserved exactly as the original hand-written <img> list.
const projectImages = [
  admin1, chess1, socialmedia, banking1, romaniawarlords2, casino1, thesis1, admin2, chess2, casarosa, casino3, resell1, romaniawarlords1, casino2, admin3, thesis2, chess3,
  resell2, socialmedia, banking2, casarosa2, resell3,
];

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <div className="project-container">
        <div className="text-container">
          <h1>Projects</h1>
          <p>Check below my other personal projects that I worked on.<br/>All the projects are chosen because of their challenging problem-solving skills required.</p>
        </div>
        <InfiniteStrip className="image-container" label="Project screenshots">
          {projectImages.map((src, i) => (
            <img src={src} alt="" key={i} draggable={false} />
          ))}
        </InfiniteStrip>
        <HashLink to="https://github.com/6ernst9?tab=repositories">
          <button className="vvd"><span>View Github projects</span></button>
        </HashLink>
      </div>
      <GridPoints wrapperClassName="projects-points" />
      <GridItems />
    </section>
  )
}
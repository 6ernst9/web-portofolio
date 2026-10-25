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

// Order preserved exactly as the original hand-written <img> list; [image, alt text].
const projectImages = [
  [admin1, "Admin dashboard project"], [chess1, "Chess game project"], [socialmedia, "Socially social media app"],
  [banking1, "Banking app project"], [romaniawarlords2, "Romania Warlords website"], [casino1, "Casino game project"],
  [thesis1, "Vendify e-commerce platform"], [admin2, "Admin dashboard project"], [chess2, "Chess game project"],
  [casarosa, "Casa Rosa holiday website"], [casino3, "Casino game project"], [resell1, "Resell marketplace project"],
  [romaniawarlords1, "Romania Warlords website"], [casino2, "Casino game project"], [admin3, "Admin dashboard project"],
  [thesis2, "Vendify e-commerce platform"], [chess3, "Chess game project"], [resell2, "Resell marketplace project"],
  [socialmedia, "Socially social media app"], [banking2, "Banking app project"], [casarosa2, "Casa Rosa holiday website"],
  [resell3, "Resell marketplace project"],
];

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <div className="project-container">
        <div className="text-container">
          <h1>Projects</h1>
          <p>Check below my other personal projects that I worked on.</p>
        </div>
        <InfiniteStrip className="image-container" label="Project screenshots">
          {projectImages.map(([src, alt], i) => (
            <img src={src} alt={alt} key={i} draggable={false} decoding="async" />
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
import image from "../../../assets/img/projects/socialmedia.webp";
import {ProjectTeaser} from "./ProjectTeaser";
import "./Socially.css";

export const Socially = () => (
    <ProjectTeaser
        id="socially"
        section="socially"
        photoClass="socially-photo"
        buttonClass="socially-container-button"
        slidingText="Socially/Socially/Socially/Socially/Socially/Socially"
        direction="left"
        image={image}
        alt="Socially social media application"
        tag="#socialmedia"
        number="1/4"
    />
);
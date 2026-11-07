import image from "../../../assets/img/projects/romaniawarlords1.webp";
import {ProjectTeaser} from "./ProjectTeaser";
import "./Warlords.css";

export const Warlords = () => (
    <ProjectTeaser
        id="warlords"
        section="warlords"
        photoClass="warlords-photo"
        buttonClass="warlords-container-button"
        slidingText="Romania Warlords/Romania Warlords/Romania Warlords/Romania Warlords/Romania Warlords"
        direction="right"
        image={image}
        alt="Romania Warlords website"
        tag="#gaming"
        number="2/4"
    />
);
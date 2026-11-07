import image from "../../../assets/img/projects/casarosa.webp";
import {ProjectTeaser} from "./ProjectTeaser";
import "./CasaRosa.css";

export const CasaRosa = () => (
    <ProjectTeaser
        id="casa-rosa"
        section="casa-rosa"
        photoClass="casa-rosa-photo"
        buttonClass="casa-rosa-container-button"
        slidingText="Casa Rosa/Casa Rosa/Casa Rosa/Casa Rosa/Casa Rosa/Casa Rosa/Casa Rosa/Casa Rosa"
        direction="right"
        image={image}
        alt="Casa Rosa holiday accommodation website in Salento"
        tag="#holidaybnb"
        number="4/4"
    />
);
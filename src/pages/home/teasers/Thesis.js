import image from "../../../assets/img/projects/vendify1.webp";
import {ProjectTeaser} from "./ProjectTeaser";
import "./Thesis.css";

export const Thesis = () => (
    <ProjectTeaser
        id="vendify"
        section="vendify"
        photoClass="socially-photo"
        buttonClass="vendify-container-button"
        slidingText="Vendify/Vendify/Vendify/Vendify/Vendify/Vendify/Vendify/Vendify/Vendify/Vendify/Vendify/Vendify"
        direction="left"
        image={image}
        alt="Vendify e-commerce platform"
        tag="#thesis"
        number="3/4"
    />
);
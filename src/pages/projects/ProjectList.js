import {ProjectDetail} from "./ProjectDetail";
import {projectDetails} from "../../data/projects";

export const ProjectList = () => (
    <>
        {projectDetails.map((project, index) => (
            <ProjectDetail project={project} index={index} key={project.id} />
        ))}
    </>
);

import {ProjectsHead} from "./ProjectsHead";
import {ProjectList} from "./ProjectList";
import {Contact} from "../../shared/Contact";
import {usePageTitle} from "../../hooks/usePageTitle";

export const ProjectsPage = () => {
    usePageTitle("Projects");

    return (
        <>
            <ProjectsHead />
            <ProjectList />
            <Contact />
        </>
    );
};

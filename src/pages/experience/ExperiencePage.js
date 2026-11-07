import {ExperienceDetail} from "./ExperienceDetail";
import {Contact} from "../../shared/Contact";
import {usePageTitle} from "../../hooks/usePageTitle";

export const ExperiencePage = () => {
    usePageTitle("Experience");

    return (
        <>
            <ExperienceDetail />
            <Contact />
        </>
    );
};

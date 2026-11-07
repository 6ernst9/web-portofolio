import {AboutDetail} from "./AboutDetail";
import {Contact} from "../../shared/Contact";
import {usePageTitle} from "../../hooks/usePageTitle";

export const AboutPage = () => {
    usePageTitle("About");

    return (
        <>
            <AboutDetail />
            <Contact />
        </>
    );
};

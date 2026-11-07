import {Banner} from "./Banner";
import {About} from "./About";
import {Resume} from "./Resume";
import {Experience} from "./Experience";
import {Socially} from "./teasers/Socially";
import {Warlords} from "./teasers/Warlords";
import {Thesis} from "./teasers/Thesis";
import {CasaRosa} from "./teasers/CasaRosa";
import {Projects} from "./Projects";
import {Contact} from "../../shared/Contact";
import {usePageTitle} from "../../hooks/usePageTitle";

export const HomePage = () => {
    usePageTitle("");

    return (
        <>
            <Banner />
            <About />
            <Resume />
            <Experience />
            <Socially />
            <Warlords />
            <Thesis />
            <CasaRosa />
            <Projects />
            <Contact />
        </>
    );
};

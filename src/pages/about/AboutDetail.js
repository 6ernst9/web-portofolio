import {PageHero} from "../../shared/PageHero";
import {WhatIDo} from "./WhatIDo";
import {TechStack} from "./TechStack";
import {Education} from "./Education";
import {BeyondCode} from "./BeyondCode";
import {intro} from "../../data/about";
import "./AboutDetail.css";

export const AboutDetail = () => (
    <section className="page-section about-page">
        <PageHero slide="About Me" title="About me" lead={intro} />
        <WhatIDo />
        <TechStack />
        <Education />
        <BeyondCode />
    </section>
);

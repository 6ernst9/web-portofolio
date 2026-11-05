import {useLayoutEffect, useRef} from "react";
import arrow from "../assets/img/arrow-left.svg";
import {useInView} from "../hooks/useInView";
import {GridItems} from "./GridItems";

import betfairIcon from "../assets/img/betfair.webp";
import pokerstarsIcon from "../assets/img/pokerstars.webp";
import sisalIcon from "../assets/img/sisal.webp";

const icons = {
    "Betfair": betfairIcon,
    "PokerStars": pokerstarsIcon,
    "SISAL": sisalIcon
};

const roles = [
    {
        id: "betfair",
        years: "Feb 2026 – Present",
        current: true,
        company: "Betfair",
        title: "Software Engineer",
        bullets: [
            "Integrate third-party game and rewards providers.",
            "Migrated a core rewards service to AWS on a Java, Spring and Cougar backend."
        ]
    },
    {
        id: "pokerstars-junior",
        years: "Aug 2023 – Feb 2026",
        company: "PokerStars",
        title: "Software Engineer",
        bullets: [
            "Built the authentication platform on Spring, OAuth2 and PostgreSQL.",
            "Coordinated logins across Pragmatic, SISAL and Betfair."
        ]
    },
    {
        id: "sisal",
        years: "Feb – Sep 2025",
        company: "SISAL",
        title: "Software Engineer",
        bullets: [
            "Spring microservices (REST, SOAP) for regulatory compliance reports.",
            "XML reports for Southern European regulators, on Kafka and MongoDB."
        ]
    },
    {
        id: "pokerstars-intern",
        years: "Jan – Aug 2023",
        company: "PokerStars",
        title: "Software Engineer Intern",
        bullets: [
            "Built the help center admin tool: articles, configs and caching.",
            "Integrated a Salesforce chatbot and maintained the PokerStars frontend."
        ]
    }
];

export const Experience = () => {
    const [ref, inView] = useInView();
    const listRef = useRef(null);

    useLayoutEffect(() => {
        const list = listRef.current;
        if (!list) return undefined;

        const measure = () => {
            const logos = list.querySelectorAll(".experience-logo");
            if (!logos.length) return;
            const box = list.getBoundingClientRect();
            const first = logos[0].getBoundingClientRect();
            const last = logos[logos.length - 1].getBoundingClientRect();
            list.style.setProperty("--line-top", `${first.top + first.height / 2 - box.top}px`);
            list.style.setProperty("--line-bottom", `${box.bottom - (last.top + last.height / 2)}px`);
        };

        measure();
        const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
        if (observer) {
            observer.observe(list);
            list.querySelectorAll(".experience-details").forEach((details) => observer.observe(details));
        }
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
        return () => {
            if (observer) observer.disconnect();
        };
    }, []);

    return (
        <section className={`experience${inView ? " is-visible" : ""}`} id="experience" ref={ref}>
            <GridItems />
            <div className="experience-container">
                <ol className="experience-list" ref={listRef} style={{"--roles": roles.length}}>
                    {roles.map((role, index) => (
                        <li className={`experience-item${role.current ? " current" : ""}`} key={role.id} style={{"--i": index}}>
                            <h2 className="experience-years">{role.years}</h2>
                            <div className="experience-logo">
                                <img src={icons[role.company]} alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="experience-details">
                                <h3 className="experience-heading">
                                    <span className="experience-role">{role.title}</span>
                                    <span className="experience-slash" aria-hidden="true">/</span>
                                    <span className="experience-company">{role.company}</span>
                                </h3>
                                <ul className="experience-bullets">
                                    {role.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <div className="experience-next-container">
                <img className="about-arrow" src={arrow} alt="" />
                <p>Projects</p>
            </div>
        </section>
    );
};
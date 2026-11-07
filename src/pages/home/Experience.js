import {useLayoutEffect, useRef} from "react";
import {useInView} from "../../hooks/useInView";

import {roles as allRoles, roleIcons} from "../../data/roles";
import {HashLink} from "react-router-hash-link";
import "./Experience.css";

const roles = allRoles.slice(0, 4);

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
            <div className="experience-container">
                <ol className="experience-list" ref={listRef} style={{"--roles": roles.length}}>
                    {roles.map((role, index) => (
                        <li className={`experience-item${role.current ? " current" : ""}`} key={role.id} style={{"--i": index}}>
                            <h2 className="experience-years">{role.years}</h2>
                            <div className={role.company === "Freelance" ? "experience-logo experience-logo-plain" : "experience-logo"}>
                                <img src={roleIcons[role.company]} alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="experience-details">
                                <h3 className="experience-heading">
                                    <span className="experience-role">{role.title}</span>
                                    <span className="experience-slash" aria-hidden="true">/</span>
                                    <span className="experience-company">{role.company}</span>
                                </h3>
                                <p className="experience-summary">{role.summary}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <HashLink className="section-button" to="/experience">
                <button className="vvd"><span>Full experience</span></button>
            </HashLink>
        </section>
    );
};

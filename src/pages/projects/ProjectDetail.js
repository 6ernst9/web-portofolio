import {SkillList} from "../../shared/SkillList";
import {MacPhoto} from "../../shared/MacPhoto";
import {useParallaxScroll} from "../../hooks/useParallaxScroll";
import "./ProjectDetail.css";

export const ProjectDetail = ({project, index}) => {
    const {scrollPosition} = useParallaxScroll();
    const direction = index % 2 ? "right" : "left";
    const section = document.getElementById(project.id);
    const top = section ? section.getBoundingClientRect().top + window.scrollY : 0;
    const offset = (scrollPosition - top) * 0.75 * (direction === "left" ? -1 : 1);

    return (
        <section className="project-detail" id={project.id} style={{backgroundColor: project.color}}>
            <div className="project-detail-sliding" aria-hidden="true">
                <span
                    className="project-detail-sliding-text"
                    style={{color: project.ghost, transform: `translateX(${offset}px)`}}>
                    {`${project.name}/`.repeat(12)}
                </span>
            </div>
            <div className="project-detail-container">
                <div className="project-detail-photo">
                    <MacPhoto src={project.image} alt={project.alt} />
                </div>
                <div className="project-detail-text">
                    <p>{project.summary}</p>
                    {project.stack.length > 0 && (
                        <div className="project-detail-stack">
                            <SkillList items={project.stack} pills />
                        </div>
                    )}
                    {project.story.map((text) => <p className="project-detail-story" key={text}>{text}</p>)}
                </div>
                {project.image2 && (
                    <div className="project-detail-photo project-detail-photo-two">
                        <MacPhoto src={project.image2} alt={project.alt2} />
                    </div>
                )}
                <div className="project-detail-aside">
                    <ul className="project-detail-list">
                        {project.details.map((text) => <li key={text}>{text}</li>)}
                    </ul>
                    <div className="project-detail-cta">
                        <p className="project-detail-tag">{project.tag}</p>
                        <a href={project.link.href} target="_blank" rel="noreferrer">
                            <button className="vvd"><span>{project.link.label}</span></button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

import {HashLink} from "react-router-hash-link";
import {SlidingText} from "../../../shared/SlidingText";
import {MacPhoto} from "../../../shared/MacPhoto";
import {useCursorParallax} from "../../../hooks/useCursorParallax";
import "./teasers.css";

export const ProjectTeaser = ({id, section, photoClass, buttonClass, slidingText, direction, image, alt, tag, number}) => {
    const cursorRef = useCursorParallax();

    return (
        <section className={section} id={id} ref={cursorRef}>
            <SlidingText className={`${section}-sliding-text`} direction={direction}>
                {slidingText}
            </SlidingText>
            <div className="socially-container is-teaser">
                <div className={photoClass}>
                    <MacPhoto src={image} alt={alt} />
                </div>
                <div className={buttonClass}>
                    <p>{tag}</p>
                    <HashLink to={`/projects#${id}`}>
                        <button className="vvd"><span>View details</span></button>
                    </HashLink>
                </div>
            </div>
            <p className="socially-projects-number">{number}</p>
        </section>
    );
};
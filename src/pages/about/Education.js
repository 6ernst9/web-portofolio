import {Block} from "../../shared/Block";
import {JobEntry} from "../../shared/JobEntry";
import {education} from "../../data/about";
import "./Education.css";

export const Education = () => (
    <Block innerClassName="page-block">
        <h2>Education</h2>
        {education.map((entry) => (
            <JobEntry
                key={entry.school}
                logo={entry.logo}
                years={entry.years}
                title={entry.degree}
                company={entry.level}
                firm={entry.school}
                place={entry.location}
                stack={entry.stack}
                details={entry.details}
                titleTag="h3"
                titleClassName="education-title"
            />
        ))}
    </Block>
);

import "./JobEntry.css";
import {SkillList} from "./SkillList";

export const JobEntry = ({logo, years, title, company, firm, place, summary, stack, details, titleTag: Title = "h2", titleClassName = "", plainLogo = false, current = false}) => (
    <div className="job-body">
        <div className="job-intro">
            <div className="job-header">
                <div className={`job-logo${plainLogo ? " job-logo-plain" : ""}${current ? " job-logo-current" : ""}`}>
                    <img src={logo} alt="" loading="lazy" decoding="async" />
                </div>
                <p className="job-years">{years}</p>
            </div>
            <Title className={`job-title${titleClassName ? ` ${titleClassName}` : ""}`}>{title}<span className="job-company">/{company}</span></Title>
            {firm && <p className="job-meta"><span className="job-firm">{firm}</span>, {place}</p>}
            {summary && <p className="job-summary">{summary}</p>}
            {stack && <SkillList items={stack} pills />}
        </div>
        <ul className="job-details">
            {details.map((text) => <li key={text}>{text}</li>)}
        </ul>
    </div>
);

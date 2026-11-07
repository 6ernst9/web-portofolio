import {PageHero} from "../../shared/PageHero";
import {Block} from "../../shared/Block";
import {JobEntry} from "../../shared/JobEntry";
import {ResumeButton} from "../../shared/ResumeButton";
import {roles, roleIcons} from "../../data/roles";
import "./ExperienceDetail.css";

export const ExperienceDetail = () => (
    <section className="experience-detail">
        <PageHero
            slide="Experience"
            title="Experience"
            lead="Backend engineering in the online gaming space, from authentication and regulatory reporting to casino game integrations, built mainly on Java, Spring and Kafka.">
            <ResumeButton />
        </PageHero>
        {roles.map((role) => (
            <Block id={role.id} key={role.id}>
                <JobEntry
                    logo={roleIcons[role.company]}
                    years={role.years}
                    title={role.title}
                    company={role.company}
                    firm={role.meta && role.meta[0]}
                    place={role.meta && role.meta.slice(1).join(", ")}
                    summary={role.summary}
                    stack={role.stack}
                    details={role.details}
                    plainLogo={role.company === "Freelance"}
                    current={role.current}
                />
            </Block>
        ))}
    </section>
);

import arrow from "../assets/img/arrow-left.svg";
import {useInView} from "../hooks/useInView";
import {GridItems} from "./GridItems";
import {GridPoints} from "./GridPoints";

// Icon-only logos for the timeline circles (companies with a timeline entry)
import betfairIcon from "../assets/img/betfair.png";
import pokerstarsIcon from "../assets/img/pokerstars.png";
import sisalIcon from "../assets/img/sisal.png";

const icons = {
    "Betfair": betfairIcon,
    "PokerStars": pokerstarsIcon,
    "SISAL": sisalIcon
};

// Most recent first. Companies stay separate even where dates overlap.
const roles = [
    {
        id: "betfair",
        years: "Feb 2026 – Present",
        current: true,
        company: "Betfair",
        title: "Software Engineer",
        description: "Backend on rewards and games: provider integrations, the jackpot admin tool and a core service migration to AWS.",
        mobileDescription: "Rewards and games backend, plus AWS migration.",
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
        description: "Built the authentication platform coordinating logins across Pragmatic, SISAL and Betfair.",
        mobileDescription: "Login platform for Pragmatic, SISAL and Betfair.",
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
        description: "Remote backend microservices for regulatory compliance reporting across Southern Europe.",
        mobileDescription: "Compliance reporting across Southern Europe.",
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
        description: "Built the help center admin tool, integrated a Salesforce chatbot and maintained the main PokerStars frontend.",
        mobileDescription: "Help center admin tool and Salesforce chatbot.",
        bullets: [
            "Built the help center admin tool: articles, configs and caching.",
            "Integrated a Salesforce chatbot and maintained the PokerStars frontend."
        ]
    }
];

export const Experience = () => {
    // Reveal animation (App.css): plays once, when the section first scrolls into view
    const [ref, inView] = useInView();

    return (
        <section className={`experience${inView ? " is-visible" : ""}`} id="experience" ref={ref}>
            <GridItems />
            <div className="experience-container">
                <ol className="experience-list" style={{"--roles": roles.length}}>
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
                                {/* Bullets on large screens, short text on tablets, shorter still on phones (see CSS) */}
                                <p className="experience-description">{role.description}</p>
                                <p className="experience-description-phone">{role.mobileDescription}</p>
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
            <GridPoints wrapperClassName="experience-points" />
        </section>
    );
};
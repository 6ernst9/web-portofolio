import betfairIcon from "../assets/img/companies/betfair.webp";
import pokerstarsIcon from "../assets/img/companies/pokerstars.webp";
import sisalIcon from "../assets/img/companies/sisal.webp";
import freelanceIcon from "../assets/img/brand/logo.svg";

export const roleIcons = {
    "Betfair": betfairIcon,
    "PokerStars": pokerstarsIcon,
    "SISAL": sisalIcon,
    "Freelance": freelanceIcon
};

export const roles = [
    {
        id: "betfair",
        years: "Feb 2026 – Present",
        current: true,
        company: "Betfair",
        title: "Software Engineer",
        meta: ["Betfair Romania Development", "Cluj, Romania"],
        summary: "Backend engineer working on game and rewards provider integrations.",
        stack: ["Java", "Spring", "Cougar", "AWS", "Docker", "Chef", "SOAP"],
        details: [
            "Integrate new game and rewards providers, including Games Global and Tombola.",
            "Wire up provider promotions such as free spins and free bingo tickets.",
            "Migrated a core rewards service to AWS with Docker, moving the configuration to environment variables.",
            "Maintain the jackpot configuration admin tool.",
            "Preparing the integration of another large provider with the team."
        ]
    },
    {
        id: "pokerstars-junior",
        years: "Aug 2023 – Feb 2026",
        company: "PokerStars",
        title: "Software Engineer",
        meta: ["Betfair Romania Development", "Cluj, Romania"],
        summary: "Built and maintained the authentication platform that lets partners run the PokerStars poker engine as a SaaS.",
        stack: ["Java", "Spring", "OAuth2", "PostgreSQL", "Kafka", "Protobuf", "Redis", "AWS"],
        details: [
            "Built and maintained the PokerStars Network authentication platform on Spring, OAuth2 and PostgreSQL.",
            "Coordinated logins across the Pragmatic, SISAL and Betfair platforms.",
            "Published login and logout events over Kafka with Protobuf, with Redis caching.",
            "Deployed on AWS, using ECR for images and Secrets Manager for credentials."
        ]
    },
    {
        id: "sisal",
        years: "Feb – Sep 2025",
        company: "SISAL",
        title: "Software Engineer",
        meta: ["Betfair Romania Development", "Remote, European Economic Area"],
        summary: "Backend microservices for regulatory compliance reporting in France, Spain and Portugal.",
        stack: ["Java", "Spring", "REST", "SOAP", "Kafka", "MongoDB", "SFTP"],
        details: [
            "Built Spring microservices exposing REST and SOAP APIs for regulatory compliance reports.",
            "Generated the per-country XML reports with cron-based requests, on Kafka and MongoDB.",
            "Worked on the SFTP service that stores the reports.",
            "Handled communication with each regulator: SOAP for Spain and Portugal, DNS lookup for France."
        ]
    },
    {
        id: "pokerstars-intern",
        years: "Jan – Aug 2023",
        company: "PokerStars",
        title: "Software Engineer Intern",
        meta: ["Betfair Romania Development", "Cluj, Romania"],
        summary: "Internship on PokerStars operations: the help center, translations and the main frontend.",
        stack: ["React", "Redux", "TypeScript", "Java", "Spring", "WebFlux", "OData", "Redis"],
        details: [
            "Built the admin tool for the PokerStars help center, managing articles, configs and caching across jurisdictions.",
            "Integrated the Salesforce chatbot, replacing the earlier LivePerson chat.",
            "Maintained the main PokerStars frontend.",
            "Owned the URL resolver and the jurisdiction and i18n translation systems.",
            "Worked on the accounts and wallets adapter, using WebFlux and OData."
        ]
    },
    {
        id: "freelance",
        years: "Jul 2022 – Jan 2023",
        company: "Freelance",
        title: "Software Developer",
        meta: ["Contract", "Remote, European Economic Area"],
        summary: "A solo project, from first line to delivery in three months.",
        stack: ["Android", "Kotlin", "Java", "Compose", "SQLite"],
        details: [
            "Built a custom Android app in Kotlin and Java for managing Airbnb bookings, occupancy and property data.",
            "Designed it offline-first, with a local SQLite database and a Jetpack Compose interface.",
            "Delivered the whole app on my own in three months, and kept maintaining it afterwards."
        ]
    }
];
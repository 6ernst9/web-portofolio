import betfairIcon from "../assets/img/companies/betfair.webp";
import pokerstarsIcon from "../assets/img/companies/pokerstars.webp";
import betrIcon from "../assets/img/companies/betr.webp";
import sisalIcon from "../assets/img/companies/sisal.webp";
import freelanceIcon from "../assets/img/brand/logo.svg";

export const roleIcons = {
    "Betfair": betfairIcon,
    "PokerStars": pokerstarsIcon,
    "SISAL": sisalIcon,
    "Freelance": freelanceIcon,
    "Betr": betrIcon
};

export const roles = [
    {
        id: "pitchtech",
        years: "Dec 2026 – Present",
        current: true,
        company: "Betr",
        title: "Java Software Engineer",
        meta: ["PITCH TECH", "Cluj, Romania"],
        summary: "Java backend engineer on the casino team of the Betr superapp.",
        stack: ["Java", "Spring", "Kafka", "PostgreSQL", "Redis", "AWS"],
        details: [
            "Building Java backend services for the casino on the Betr superapp."
        ]
    },
    {
        id: "betfair",
        years: "Feb – Dec 2026",
        company: "Betfair",
        title: "Java Software Engineer",
        meta: ["Betfair Romania Development", "Cluj, Romania"],
        summary: "Built and maintained backend integrations for game and rewards providers.",
        stack: ["Java", "Spring", "Cougar", "AWS", "Docker", "Chef", "SOAP"],
        details: [
            "Integrated new game and rewards providers, including Games Global and Tombola.",
            "Wired up provider promotions such as free spins and free bingo tickets.",
            "Migrated a core rewards service to AWS with Docker, moving the configuration to environment variables.",
            "Maintained the jackpot configuration admin tool.",
            "Prepared the integration of another large provider with the team."
        ]
    },
    {
        id: "pokerstars-junior",
        years: "Aug 2023 – Feb 2026",
        company: "PokerStars",
        title: "Full-Stack Software Engineer",
        meta: ["Betfair Romania Development", "Cluj, Romania"],
        summary: "Built and maintained the authentication platform behind a PokerStars product.",
        stack: ["Java", "Spring", "OAuth2", "PostgreSQL", "Kafka", "Protobuf", "Redis", "AWS"],
        details: [
            "Built and maintained the authentication platform for a PokerStars product, on Spring, OAuth2 and PostgreSQL.",
            "Coordinated logins across several connected platforms.",
            "Published login and logout events over Kafka with Protobuf, with Redis caching.",
            "Deployed on AWS, using ECR for images and Secrets Manager for credentials."
        ]
    },
    {
        id: "sisal",
        years: "Feb – Sep 2025",
        company: "SISAL",
        title: "Java Software Engineer",
        meta: ["Betfair Romania Development", "Remote, Europe"],
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
        plainLogo: true,
        company: "Freelance",
        title: "Software Developer",
        meta: ["Contract", "Remote, Europe"],
        summary: "A solo project, from first line to delivery in three months.",
        stack: ["Android", "Kotlin", "Java", "Jetpack Compose", "SQLite"],
        details: [
            "Built a custom Android app in Kotlin and Java for managing Airbnb bookings, occupancy and property data.",
            "Designed it offline-first, with a local SQLite database and a Jetpack Compose interface.",
            "Delivered the whole app on my own in three months, and kept maintaining it afterwards."
        ]
    }
];
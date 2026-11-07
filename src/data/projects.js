import socially from "../assets/img/projects/socialmedia.webp";
import socially2 from "../assets/img/projects/socialmedia2.webp";
import warlords from "../assets/img/projects/romaniawarlords1.webp";
import vendify from "../assets/img/projects/vendify1.webp";
import casaRosa from "../assets/img/projects/casarosa.webp";
import warlords2 from "../assets/img/projects/romaniawarlords2.webp";
import vendify2 from "../assets/img/projects/vendify2.webp";
import casaRosa2 from "../assets/img/projects/casarosa2.webp";

export const projectDetails = [
    {
        id: "socially",
        name: "Socially",
        tag: "#socialmedia",
        color: "rgb(210, 210, 210)",
        ghost: "rgb(196, 196, 196)",
        image: socially,
        alt: "Socially social media application",
        image2: socially2,
        alt2: "Socially camera application",
        stack: ["Java", "Spring", "WebFlux", "AOP", "PostgreSQL", "MongoDB", "Firebase", "React", "Redux"],
        summary: "A social media application built around ephemeral messaging and multimedia sharing, on a Spring microservices backend.",
        details: [
            "Photos and videos disappear after they have been viewed.",
            "Built as Spring microservices, so each part of the backend can run and scale independently.",
            "Real-time interactions between users, backed by a distributed system.",
        ],
        kind: "University project",
        story: [
            "Socially started as a university project, built around the way short-lived content works in modern messaging apps: you send a photo or a video, the other person views it, and it is gone.",
            "I built the backend as a set of Spring microservices rather than a single application, so each part could be developed and run on its own.",
        ],
        link: {href: "https://github.com/6ernst9/socially", label: "View Source code"}
    },
    {
        id: "warlords",
        name: "Romania Warlords",
        tag: "#gaming",
        color: "#FF7A00",
        ghost: "#E56800",
        image: warlords,
        alt: "Romania Warlords website",
        image2: warlords2,
        alt2: "Romania Warlords clan page",
        stack: ["React", "Tailwind", "Supabase", "Clash Royale API"],
        summary: "A hub for Romania's biggest Clash Royale clan family, powered by live Clash Royale API data.",
        details: [
            "Syncs clan and player standings from the Clash Royale API every four hours.",
            "Rankings and online member counts stay current, backed by Supabase.",
            "A detail page for every clan, with full Romanian and English support.",
            "Hosted on Netlify with a scheduled background function doing the sync.",
        ],
        kind: "Client project",
        story: [
            "Built for the community behind the biggest Clash Royale clan family in Romania, as a React project I can maintain and keep extending, with Tailwind styling and full Romanian and English support.",
            "It features live standings, online member counts and a detail page for every clan, all fed by the Clash Royale API instead of hand-edited pages.",
        ],
        link: {href: "https://romaniawarlords.ro", label: "View Website"}
    },
    {
        id: "vendify",
        name: "Vendify",
        tag: "#thesis",
        color: "#00E88F",
        ghost: "#00C67D",
        image: vendify,
        alt: "Vendify e-commerce platform",
        image2: vendify2,
        alt2: "Vendify store dashboard",
        stack: ["React", "Redux", "Java", "Spring", "WebFlux", "PostgreSQL", "MongoDB", "Firebase"],
        summary: "An eCommerce platform that makes building and running an online store simple, even without technical expertise.",
        details: [
            "A dashboard with customizable themes for store owners.",
            "Manage products across a single shop or several at once.",
            "Built-in analytics and session tracking to understand customers.",
            "Promotional tools such as discounts and highlights.",
        ],
        kind: "Bachelor's thesis",
        story: [
            "Vendify is my bachelor's thesis. The idea was a store builder for people who are not developers: pick a theme, add products and start selling, without touching code.",
            "The front end is React with Redux and TypeScript, the backend runs on Java and Spring with WebFlux, and the data lives in PostgreSQL, MongoDB and Firebase.",
        ],
        link: {href: "https://github.com/6ernst9/vendify", label: "View Source code"}
    },
    {
        id: "casa-rosa",
        name: "Casa Rosa",
        tag: "#holidaybnb",
        color: "#D9A18F",
        ghost: "#CF927E",
        image: casaRosa,
        alt: "Casa Rosa holiday accommodation website in Salento",
        image2: casaRosa2,
        alt2: "Casa Rosa apartments",
        stack: ["React", "Supabase", "Analytics"],
        summary: "A custom website for a holiday property in Salento, Italy, with three apartments of different sizes.",
        details: [
            "Each apartment has its own photo gallery.",
            "Available in Italian and English, with light and dark themes.",
            "Visitors pick their dates and are sent to Booking.com to book.",
            "A private admin panel with visit tracking and website analytics for the owner.",
        ],
        kind: "Client project",
        story: [
            "Built for the owner of a holiday property in Salento with three apartments of 50, 80 and 120 square metres. The brief was simple: let guests see each apartment and pick their dates, while the bookings themselves stay on Booking.com.",
            "I also built the private admin panel the owner uses to follow visits and see how people find the site.",
        ],
        link: {href: "https://casarosaholiday.com", label: "View Website"}
    }
];
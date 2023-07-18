// Poster imports
import temmt_poster from "../images/posters/temmt.png";
import skipper_poster from "../images/posters/skipper.png";
import wstraining_poster from "../images/posters/wstraining.jpg";
import talkable_poster from "../images/posters/talkable.png";
import navigateme_poster from "../images/posters/navigateme.jpg";
import findapc_poster from "../images/posters/findapc.jpg";

export const nav_links = [
    {
        name: "Projects",
        link: "/projects",
    },
    {
        name: "CV",
        link: "/cv",
    },
    {
        name: "Contact",
        link: "/contact",
    },
];

export const experiences = [
    {
        title: "Software Developer",
        location: "Sky (Brentwood)",
        duration: "(September 2020 - Present)"
    },
    {
        title: "Full Stack JavaScript Developer",
        location: "Element Softworks",
        duration: "(March 2018 - September 2020)",
    },
    {
        title: "Student Associate Developer",
        location: "University of Lincoln",
        duration: "(December 2016 - June 2018)",
    },
];

export const certifications = [
    "Microsoft Certified - Azure Fundamentals",
    "MTA - Security Fundamentals",
    "MTA - HTML5 Application Development Fundamentals",
    "MTA - Introduction to Programming Using JavaScript",
    "MTA - Networking Fundamentals",
    "MTA - Database Fundamentals",
];

export const projects = [
    {
        name: "Temmt",
        description:
            "A location-based mobile application providing deals and discounts to users as they walk along the high street.",
        skills: ["React", "React Native", "Redux", "Firebase"],
        image: temmt_poster,
    },
    {
        name: "Skipper My Boat",
        description:
            "A Yacht and boat rental platform offering peer-to-peer rental between individual owners/agencies and travellers.",
        skills: ["React", "React Native", "Redux", "Firebase", "NoSQL", "MongoDB", "Express", "Node.js"],
        image: skipper_poster,
    },
    {
        name: "WS Training",
        description: "A clean, modern website and admin management system for a local apprenticeship company.",
        skills: ["HTML5", "CSS", "Express", "Bootstrap", "Handlebars", "NoSQL"],
        image: wstraining_poster,
    },
    {
        name: "Talkable",
        description:
            "A Startup medical platform allowing users to easily find providers that specialises in what you need help with.",
        skills: ["Vue", "Bootstrap", "Firebase"],
        image: talkable_poster,
    },
    {
        name: "Find-a-PC",
        description:
            "A University of Lincoln based project helping students find free/unused computers in campus buildings.",
        skills: ["Leaflet", "GeoJSON", "HTML5", "Bootstrap", ".NET"],
        image: findapc_poster,
    },
    {
        name: "Navigate-Me",
        description:
            "A University of Lincoln based project helping students navigate around the campus by providing pathfinding with an interactive map.",
        skills: ["Leaflet", "GeoJSON", "HTML5", "Bootstrap", ".NET"],
        image: navigateme_poster,
    },
];

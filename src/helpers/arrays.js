// Poster imports
import localhouseprices_poster from "../images/posters/local-house-prices.png";
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
        description: "Developing embedded software for broadband products currently available in the UK, Republic of Ireland, and Italy. Mostly working with C, utilising Python and Jenkins for automation and testing.",
        duration: "(September 2020 - Present)"
    },
    {
        title: "Full Stack JavaScript Developer",
        location: "Element Softworks",
        description: "Fullstack Developer working on React and React Native applications for clients. Using latest development tools and cloud services to provide a seamless user experience.",
        duration: "(March 2018 - September 2020)",
    },
    {
        title: "Student Associate Developer",
        location: "University of Lincoln",
        description: "Creating services such as Find-A-PC and Navigate-Me to aid and improve student experience whilst on campus.",
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
        name: "LocalHousePrices",
        description:
            "A modern server-side rendered fullstack React application, providing users with easy access to house prices across the United Kingdom. Built as a side-project to better understand SEO and modern web development.",
        skills: ["React", "Remix", "Supabase", "Tailwind", "Postgres"],
        image: localhouseprices_poster,
        link: "https://localhouseprices.co.uk",
    },
    {
        name: "Temmt",
        description:
            "A location-based mobile application providing deals and discounts to users as they walk along the high street.",
        skills: ["React", "React Native", "Redux", "Firebase"],
        image: temmt_poster,
        link: null
    },
    {
        name: "Skipper My Boat",
        description:
            "A Yacht and boat rental platform offering peer-to-peer rental between individual owners/agencies and travellers.",
        skills: ["React", "React Native", "Redux", "Firebase", "NoSQL", "MongoDB", "Express", "Node.js"],
        image: skipper_poster,
        link: "https://and-element.com/projects/skipper-my-boat"
    },
    {
        name: "WS Training",
        description: "A clean, modern website and admin management system for a local apprenticeship company.",
        skills: ["HTML5", "CSS", "Express", "Bootstrap", "Handlebars", "NoSQL"],
        image: wstraining_poster,
        link: null
    },
    {
        name: "Talkable",
        description:
            "A Startup medical platform allowing users to easily find providers that specialises in what you need help with.",
        skills: ["Vue", "Bootstrap", "Firebase"],
        image: talkable_poster,
        link: null
    },
    {
        name: "Find-a-PC",
        description:
            "A University of Lincoln based project helping students find free/unused computers in campus buildings.",
        skills: ["Leaflet", "GeoJSON", "HTML5", "Bootstrap", ".NET"],
        image: findapc_poster,
        link: null
    },
    {
        name: "Navigate-Me",
        description:
            "A University of Lincoln based project helping students navigate around the campus by providing pathfinding with an interactive map.",
        skills: ["Leaflet", "GeoJSON", "HTML5", "Bootstrap", ".NET"],
        image: navigateme_poster,
        link: null
    },
];

import { RequestInfo } from "rwsdk/worker";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import Head from "@/app/components/Head";

type ProjectList = {
    title: string;
    emoji: string;
    desc: string;
    href: string;
    // year: string;
};

const presentProjectList: ProjectList[] = [
    {
        title: "Focus Fish",
        emoji: "🎣",
        desc: "A focus timer for iOS.",
        href: "https://apps.apple.com/us/app/study-timer-focus-fish/id6745766537",
    },
    {
        title: "Step Scape",
        emoji: "🚶",
        desc: "A step tracking game for iOS.",
        href: "https://apps.apple.com/us/app/step-tracker-stepscape/id6743495227",
    },
    {
        title: "One Percent",
        emoji: "🎯",
        desc: "A goal setting app for iOS.",
        href: "https://impey.dev/",
    },
    {
        title: "Food Swipe",
        emoji: "🍨",
        desc: "A mobile application for groups selecting a place to eat.",
        href: "https://impey.dev/",
    },
    {
        title: "Blue & Bear",
        emoji: "🐶",
        desc: "Beautifully illustrated & naturally inspired dog accessories.",
        href: "https://blueandbear.com",
    },
    {
        title: "Index Igniter",
        emoji: "🔥",
        desc: "An automated search engine indexing and ranking assistant.",
        href: "https://indexigniter.com/",
    },
    {
        title: "Link Catch",
        emoji: "🥅",
        desc: "URL Shortner with built in analytics and conditional routing.",
        href: "https://linkcat.ch/",
    },
    {
        title: "Local House Prices",
        emoji: "🏡",
        desc: "Detailed insights into house prices across the United Kingdom.",
        href: "https://localhouseprices.co.uk",
    },
];

const pastProjectList: ProjectList[] = [
    {
        title: "Translate Shorts",
        emoji: "💬",
        desc: "Short form video translator using Remotion, GCP, and AWS.",
        href: "https://impey.dev",
    },
    {
        title: "Icon Craft",
        emoji: "🔮",
        desc: "OpenAI DALL-E App Icon Generator built with React",
        href: "https://impey.dev",
    },
    {
        title: "Commodity Chat",
        emoji: "📦",
        desc: "Pinecone/OpenAI Embeddings for quicker HSC classification",
        href: "https://impey.dev",
    },
    {
        title: "Absences",
        emoji: "🏝️",
        desc: "Employee absence and holiday management SaaS platform.",
        href: "https://impey.dev",
    },
    {
        title: "Pinnacle",
        emoji: "🟣",
        desc: "Exclusive mobile application for club members.",
        href: "https://impey.dev",
    },
    {
        title: "Skipper My Boat",
        emoji: "⛵️",
        desc: "Peer to peer boat rental platform with over 30,000 boats.",
        href: "https://and-element.com/projects/skipper-my-boat",
    },
    {
        title: "Find-A-PC",
        emoji: "🖥️",
        desc: "Helping University of Lincoln students find available computers.",
        href: "https://findapc.lincoln.ac.uk/",
    },
    {
        title: "Eco Trips",
        emoji: "🏆",
        desc: "Calculate the Co2 of your trips (Lincoln Hack Winner)",
        href: "https://impey.dev",
    },
    {
        title: "CatFacts",
        emoji: "🏆",
        desc: "Randomised Twitter Cat Facts (Lincoln Hack Winner)",
        href: "https://impey.dev",
    },
    {
        title: "NavigateMe",
        emoji: "🗺️",
        desc: "Navigating students around the University of Lincoln campus.",
        href: "https://navigateme.lincoln.ac.uk/",
    },
    {
        title: "Chrome MC Status",
        emoji: "⛏️",
        desc: "Chrome extension for checking Minecraft server status",
        href: "https://impey.dev",
    },
];

export function Projects({ ctx }: RequestInfo) {
    return (
        <>
            <Head>
                <title>Ryan Impey | Projects</title>
                <link href="https://impey.dev/" rel="canonical" />
                <meta content="Ryan Impey | Projects" name="title" />
                <meta content="Full-Stack Typescript software engineer based in Essex, England" name="description" />
                <meta content="Ryan Impey" name="author" />
                <meta content="Index" property="og:title" />
                <meta content="website" property="og:type" />
            </Head>
            <main className="h-full py-16">
                <section className="max-w-xl mx-auto py-4">
                    <h1 className="text-2xl font-mono font-bold pb-2">Side Projects</h1>
                    <div className="grid gap-y-4 font-mono">
                        <p className="pb-4">
                            I work on a lot of side projects in my spare time. Most of them never see a full release, or
                            get dropped to free up time to work on new things.
                        </p>
                        <p>
                            My tech stack for personal development is based upon TypeScript and Node. React
                            (Remix/Next/Vite/Expo) for the frontend, and normally a combination of Supabase offering for
                            the backend. I use PostgreSQL with Drizzle for any database needs.
                        </p>
                    </div>
                </section>
                <section className="max-w-xl mx-auto ">
                    <h2 className="title mb-4 text-xl font-mono font-semibold">Present</h2>
                    <dl className="space-y-4">
                        {presentProjectList.map(({ title, desc, href, emoji }) => (
                            <div className="flex flex-col gap-2 md:flex-row">
                                <dt className="min-w-36">
                                    <span className="flex">
                                        <span className="pr-1">{emoji}</span>
                                        <a className="font-mono text-sm" href={href} target="_blank">
                                            {title}:
                                        </a>
                                    </span>
                                </dt>
                                <dd className="font-mono text-sm">{desc}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
                <section aria-label="Blog post list" className="max-w-xl mx-auto pt-8">
                    <h2 className="title mb-4 text-xl font-mono font-semibold">Past</h2>
                    <dl className="space-y-4">
                        {pastProjectList.map(({ title, desc, href, emoji }) => (
                            <div className="flex flex-col gap-2 md:flex-row">
                                <dt className="min-w-36">
                                    <span className="flex">
                                        <span className="pr-1">{emoji}</span>
                                        <a className="font-mono text-sm" href={href} target="_blank">
                                            {title}:
                                        </a>
                                    </span>
                                </dt>
                                <dd className="font-mono text-sm">{desc}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </main>
        </>
    );
}

const techIcons = [
    {
        icon: "devicon-c-plain",
        desc: "C Lang",
    },
    {
        icon: "devicon-embeddedc-plain",
        desc: "Embedded C Programming",
    },
    {
        icon: "devicon-splunk-original-wordmark text-4xl",
        desc: "Data Platform",
    },
    {
        icon: "devicon-python-plain",
        desc: "Python",
    },
    {
        icon: "devicon-typescript-plain",
        desc: "TypeScript",
    },
    {
        icon: "devicon-react-original",
        desc: "React",
    },
    {
        icon: "devicon-javascript-plain",
        desc: "JavaScript",
    },
    {
        icon: "devicon-bash-plain",
        desc: "Bash Language",
    },
    {
        icon: "devicon-postgresql-plain",
        desc: "PostgreSQL",
    },
    {
        icon: "devicon-railway-plain",
        desc: "Railway",
    },
];

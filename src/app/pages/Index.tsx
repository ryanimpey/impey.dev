import { RequestInfo } from "rwsdk/worker";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import Head from "@/app/components/Head";

import IconCPlain from "devicons-react/icons/CPlain";
import IconCEmbedded from "devicons-react/icons/EmbeddedcPlain";
import IconSplunk from "devicons-react/icons/SplunkOriginalWordmark";
import IconPython from "devicons-react/icons/PythonPlain";
import IconTS from "devicons-react/icons/TypescriptPlain";
import IconReact from "devicons-react/icons/ReactOriginal";
import IconJS from "devicons-react/icons/JavascriptPlain";
import IconBash from "devicons-react/icons/BashPlain";
import IconPostgres from "devicons-react/icons/PostgresqlPlain";
import IconRailway from "devicons-react/icons/RailwayOriginal";

export function Index({ ctx }: RequestInfo) {
    return (
        <>
            <Head>
                <title>Ryan Impey | Senior Software Engineer</title>
                <link href="https://impey.dev/" rel="canonical" />
                <meta content="Ryan Impey | Senior Software Engineer" name="title" />
                <meta content="Full-Stack Typescript software engineer based in Essex, England" name="description" />
                <meta content="Ryan Impey" name="author" />
                <meta content="Index" property="og:title" />
                <meta content="website" property="og:type" />
            </Head>
            <main className="h-full py-16">
                <section className="max-w-xl mx-auto py-4">
                    <h1 className="text-2xl font-mono font-bold pb-2">Hello, I'm Ryan</h1>
                    <div className="grid gap-y-4 font-mono">
                        <p>
                            A full-stack developer based in Essex, England. I've previously worked as an embedded
                            software engineer with Sky, developing and maintaining broadband products used by over 6
                            million customers.
                        </p>
                        <p>
                            I'm currently leading a team at{" "}
                            <a href="https://merlincloud.ai" className="underline underline-offset-2" target="_blank">
                                Merlin Cloud
                            </a>
                            , developing software to assist retailers in deploying and analysing international marketing
                            campaigns.
                        </p>

                        <p>
                            During my free time I like to build sideprojects that occasionally see the light of day,
                            take a look at my projects page for more. Away from the screen, I'm a somewhat competent
                            snowboarder, and dog owner 🏂 🐶
                        </p>
                    </div>
                </section>
                <section className="max-w-xl mx-auto py-4">
                    <h1 className="text-2xl font-mono font-bold pb-2">Tech & Tools</h1>
                    <div className="grid gap-y-4 font-mono">
                        <p>
                            Here's a few of the languages and technologies I have professional experience working with.
                            I'm currently working with React, React Native (Expo), and TypeScript, but I've previouly
                            used, C, Bash, Python, and other technologies at various companies.
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-x-2 py-4">
                        {techIcons.map(({ icon: Icon }, index) => (
                            <Icon aria-keyshortcuts={String(index)} size={28} className="grayscale" />
                        ))}
                    </div>
                </section>
                <section className="max-w-xl mx-auto py-4">
                    <h1 className="text-2xl font-mono font-bold pb-2">Contact</h1>
                    <div className="grid gap-y-4 font-mono">
                        <p>The best way to reach me is via Linkedin or email.</p>
                    </div>
                    <div className="flex flex-row items-center gap-x-2 py-4">
                        <a href="https://github.com/ryanimpey" target="_blank">
                            <IconBrandGithub size={30} className="hover:text-sky-400" aria-label="Github" />
                        </a>
                        <a href="https://www.linkedin.com/in/impey-ryan/" target="_blank">
                            <IconBrandLinkedin size={30} className="hover:text-sky-400" aria-label="Linkedin" />
                        </a>
                        <a href="mailto:ryan@impey.dev" target="_blank">
                            <IconMail size={30} className="hover:text-sky-400" />
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}

const techIcons = [
    {
        icon: IconCPlain,
        desc: "C Lang",
    },
    {
        icon: IconCEmbedded,
        desc: "Embedded C Programming",
    },
    {
        icon: IconSplunk,
        desc: "Data Platform",
    },
    {
        icon: IconPython,
        desc: "Python",
    },
    {
        icon: IconTS,
        desc: "TypeScript",
    },
    {
        icon: IconReact,
        desc: "React",
    },
    {
        icon: IconJS,
        desc: "JavaScript",
    },
    {
        icon: IconBash,
        desc: "Bash Language",
    },
    {
        icon: IconPostgres,
        desc: "PostgreSQL",
    },
    {
        icon: IconRailway,
        desc: "Railway",
    },
];

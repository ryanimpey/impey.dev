import { Fragment } from "react";
// import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// import heroImage from "../public/hero-image-placeholder.svg"; // Replace with your actual hero image
import { ArrowRight, StarIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <Fragment>
            <Header />
            {/* Hero Section */}
            <section className="container mx-auto px-8 grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
                <div className="text-center lg:text-start space-y-6">
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                        <span className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                            Achievement
                        </span>
                        <span className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                            Rated No.1 App of 2025
                            <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight md:leading-tight">
                        The easiest way to plan your wedding
                    </h1>

                    <p className="lg:max-w-lg text-lg text-muted-foreground sm:text-xl">
                        Aisle Guide is the ultimate wedding planner designed to turn your wedding dreams into a
                        beautiful reality, without the stress! Aisle Guide is the calm, organised, and creative way to
                        plan every step of your wedding!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link href="https://impey.dev">
                            <Image
                                src="https://fthnnlxoha.ufs.sh/f/hW5yGvxL9gFiQSptpYuYQazUg1eAGOnBFoXjDltL5v3MZ6Hw"
                                width={160}
                                height={54}
                                alt="Download on the App Store"
                            />
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <div className="flex -space-x-2">
                            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                            <div className="h-8 w-8 rounded-full bg-gray-400"></div>
                            <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">200K+ Downloads</span>
                    </div>
                </div>

                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] flex justify-center items-center">
                    <Image
                        src="https://fthnnlxoha.ufs.sh/f/hW5yGvxL9gFi42xljStbThkDqe2wplG3WXJVi09o1nfs4jIE"
                        alt="Hero Image"
                        fill
                        className="object-contain"
                    />
                </div>
            </section>

            {/* Partnered Companies Section */}
            {/* <section className="container py-8 md:py-12">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    <p className="text-center md:text-start text-muted-foreground max-w-[200px]">
                        WE ARE PARTNERED WITH MORE THAN 50+ COMPANIES AROUND THE GLOBE.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
                        <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
                        <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
                        <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
                        <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
                    </div>
                </div>
            </section> */}

            {/* Features Section */}
            <section id="features" className="container mx-auto px-4 space-y-8 py-12 md:py-20 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading font-semibold text-3xl leading-[1.1] sm:text-3xl md:text-4xl">
                        Everything You Need for Your Wedding Journey
                    </h2>
                    <p className="max-w-xl leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Aisle Guide brings together all the essential tools to plan, organize, and celebrate your big
                        day—stress free.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Wedding Checklist Feature */}
                    <div className="rounded-lg border col-span-2 bg-card text-card-foreground shadow-sm p-6 space-y-4">
                        <h3 className="font-bold text-lg">Organize Your Entire Wedding Journey</h3>
                        <p>
                            Our comprehensive and intuitive wedding planner guides you through every stage, from to-do
                            lists to budget management. Customize your timeline, get timely reminders, and break down
                            tasks into manageable steps—so nothing gets missed.
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            <li>Smart, customizable timeline</li>
                            <li>Automatic reminders for must-do tasks</li>
                            <li>Track your budget allocations and spending</li>
                        </ul>
                    </div>

                    {/* Budget Planner Feature */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
                        <h3 className="font-bold text-lg">Master Your Wedding Budget with Ease</h3>
                        <p>
                            Set your total budget, and we'll help you see how much you've spent, and what outstanding
                            payments remain. Track every payment to see which categories your wedding budget is going
                            towards
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            <li>Set and manage your total budget</li>
                            <li>Track spending by category</li>
                            <li>Plan future payments</li>
                        </ul>
                    </div>

                    {/* Guest List & Seating Feature */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
                        <h3 className="font-bold text-lg">Effortlessly Manage Your Guest List & Seating</h3>
                        <p>
                            Our wedding guest list makes keeping track of invites simple! Easily add guests, update
                            their invitation RSVP status, and allocate each wedding guest to a table to help make your
                            seating planning a breeze.
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            <li>Easy guest management and RSVP tracking</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            {/* <section id="why-choose-us" className="container mx-auto px-4 space-y-8 py-12 md:py-20 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-4xl">
                        Why Choose Us Section
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"></p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                        <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold">
                            ?
                        </div>
                        <h3 className="font-bold text-lg">Title</h3>
                        <div className="space-y-1">
                            <div className="h-2 w-full bg-gray-200 rounded-sm"></div>
                            <div className="h-2 w-4/5 bg-gray-200 rounded-sm"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-3">
                        <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold">
                            ?
                        </div>
                        <h3 className="font-bold text-lg">Title</h3>
                        <div className="space-y-1">
                            <div className="h-2 w-full bg-gray-200 rounded-sm"></div>
                            <div className="h-2 w-4/5 bg-gray-200 rounded-sm"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-3">
                        <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold">
                            ?
                        </div>
                        <h3 className="font-bold text-lg">Title</h3>
                        <div className="space-y-1">
                            <div className="h-2 w-full bg-gray-200 rounded-sm"></div>
                            <div className="h-2 w-4/5 bg-gray-200 rounded-sm"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-3">
                        <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold">
                            ?
                        </div>
                        <h3 className="font-bold text-lg">Title</h3>
                        <div className="space-y-1">
                            <div className="h-2 w-full bg-gray-200 rounded-sm"></div>
                            <div className="h-2 w-4/5 bg-gray-200 rounded-sm"></div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Review Section */}
            {/* <section id="reviews" className="container mx-auto px-4 space-y-8 py-12 md:py-20 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-4xl">Review Section</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"></p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
                            <div className="flex space-x-1 text-yellow-500">
                                <StarIcon className="h-5 w-5 fill-current" />
                                <StarIcon className="h-5 w-5 fill-current" />
                                <StarIcon className="h-5 w-5 fill-current" />
                                <StarIcon className="h-5 w-5 fill-current" />
                                <StarIcon className="h-5 w-5" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-3 w-full bg-gray-200 rounded-sm"></div>
                                <div className="h-3 w-5/6 bg-gray-200 rounded-sm"></div>
                                <div className="h-3 w-full bg-gray-200 rounded-sm"></div>
                            </div>
                            <div className="flex items-center gap-3 mt-4">
                                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                                <div>
                                    <p className="font-semibold">Name</p>
                                    <p className="text-sm text-muted-foreground">Country</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* FAQ Section */}
            <section id="faq" className="container mx-auto px-4 space-y-8 py-12 md:py-20 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Find answers to common questions about Aisle Guide and wedding planning.
                    </p>
                </div>

                <div className="max-w-[800px] mx-auto space-y-4">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-semibold">
                                Can I customize my wedding checklist?
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                Absolutely! Aisle Guide's checklist is fully customizable. Add, remove, or edit tasks to
                                fit your unique wedding plans and timeline.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-semibold">
                                How does the budget planner help me stay on track?
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                Aisle Guide helps you break down your wedding budget into paid, pending, and remaining,
                                to help understand what you're spending on, and how much remains
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-semibold">
                                Can I manage RSVPs and guest details in the app?
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                Yes! Manage your guest list, update RSVPs, and track table plans all from our wedding
                                guest management screen.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg font-semibold">
                                Is my data secure with Aisle Guide?
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                We take your privacy seriously. All your data is securely stored on device and never
                                shared with third parties. You're always in control of your information.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 bg-primary-foreground rounded-lg p-10 md:p-16 my-12 md:my-20 lg:my-24">
                <div className="grid lg:grid-cols-2 place-items-center gap-10">
                    <div className="text-center lg:text-start space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight">Download for Free</h2>
                        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                            Start planning your wedding with Aisle Guide today, the ultimate wedding planner designed to
                            turn your wedding dreams into a beautiful reality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="https://impey.dev">
                                <Image
                                    src="https://fthnnlxoha.ufs.sh/f/hW5yGvxL9gFiQSptpYuYQazUg1eAGOnBFoXjDltL5v3MZ6Hw"
                                    width={160}
                                    height={54}
                                    alt="Download on the App Store"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-md">
                        <Image
                            src="https://fthnnlxoha.ufs.sh/f/hW5yGvxL9gFiHsayYNaQEcRVGSt42y5hfObkFuo3QNK9JWaM"
                            alt="Hero Image"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </Fragment>
    );
}

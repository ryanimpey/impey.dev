import { Fragment, JSX } from "react";
// import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// import heroImage from "../public/hero-image-placeholder.svg"; // Replace with your actual hero image
import { ArrowRight, StarIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import Link from "next/link";
import Head from "next/head";
import { Metadata } from "next";
import AisleGuide from "@/components/landings/AisleGuide";
import { ImpeyDev } from "@/components/landings/ImpeyDev";
import { notFound, redirect } from "next/navigation";

type Props = {
    params: Promise<{ tenant: string }>;
};

const tenants: Record<string, JSX.Element> = {
    "www.aisleguide.app": <AisleGuide />,
    "www.impey.dev": <ImpeyDev />,
    "impey-dev.vercel.app": <ImpeyDev />,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // read route params
    const { tenant } = await params;

    return {
        title: tenant,
    };
}

export default async function Home({ params }: Props) {
    const { tenant } = await params;

    const Element = tenants[tenant];
    if (typeof Element === "undefined") {
        return notFound();
    }

    return Element;
}

import { RequestInfo } from "rwsdk/worker";
import Head from "@/app/components/Head";

import React from "react";

export default function FourZeroFour({ ctx }: RequestInfo) {
    return (
        <React.Fragment>
            <Head>
                <title>Ryan Impey | 404</title>
                <link href="https://impey.dev/" rel="canonical" />
                <meta content="Ryan Impey | 404" name="title" />
                <meta content="Full-Stack Typescript software engineer based in Essex, England" name="description" />
                <meta content="Ryan Impey" name="author" />
                <meta content="Index" property="og:title" />
                <meta content="website" property="og:type" />
            </Head>
            <main className="h-full py-16">
                <section className="max-w-xl mx-auto py-4">
                    <h1 className="text-2xl font-mono font-bold pb-2">404</h1>
                    <p className="text-lg font-mono font-bold pb-2">Not found.</p>
                </section>
            </main>
        </React.Fragment>
    );
}

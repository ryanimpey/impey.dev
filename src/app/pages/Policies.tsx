import { RequestInfo } from "rwsdk/worker";
import Head from "@/app/components/Head";
import PoliciesList from "@/app/components/PoliciesList";
import { Suspense } from "react";
import zenblog from "../lib/zenblog";

export function Policies({ ctx }: RequestInfo) {
    const policiesQuery = zenblog.getPolicies();

    return (
        <>
            <Head>
                <title>Ryan Impey | App Policies</title>
                <link href="https://impey.dev/posts" rel="canonical" />
                <meta content="Ryan Impey | Posts" name="title" />
                <meta content="Ryan Impey" name="author" />
                <meta content="website" property="og:type" />
            </Head>
            <main className="h-full py-16">
                <section className="max-w-xl mx-auto py-4">
                    <h1 className="text-2xl font-mono font-bold pb-2">All Policies</h1>
                    <Suspense fallback={<p>Loading...</p>}>
                        <PoliciesList policiesQuery={policiesQuery} />
                    </Suspense>
                </section>
            </main>
        </>
    );
}

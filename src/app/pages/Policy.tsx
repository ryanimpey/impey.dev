import { RequestInfo } from "rwsdk/worker";
import Head from "@/app/components/Head";
import PoliciesList from "@/app/components/PoliciesList";
import { Suspense } from "react";
import zenblog from "../lib/zenblog";
import PolicyContent from "../components/PolicyContent";

export function Policy({ params }: RequestInfo) {
    const policiesQuery = zenblog.getPolicy(params.slug);

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
                    <Suspense fallback={<p>Loading...</p>}>
                        <PolicyContent policiesQuery={policiesQuery} />
                    </Suspense>
                </section>
            </main>
        </>
    );
}

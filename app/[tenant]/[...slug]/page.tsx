import BlockRendererClient from "@/components/shared/BlocksRenderer";
import { strapi } from "@strapi/client";
import { notFound } from "next/navigation";
const client = strapi({
    baseURL: "https://fabulous-horses-b63e2ca388.strapiapp.com/api",
    auth: process.env.STRAPI_API_KEY,
});

export default async function Page({ params }: { params: Promise<{ slug: string[]; tenant: string }> }) {
    const { tenant, slug } = await params;
    if (slug.length === 1) {
        return notFound();
    }

    const articles = await client.collection("articles");
    const all = await articles.find({
        filters: {
            slug: {
                $eq: slug.at(1),
            },
        },
    });

    if (all.meta.pagination?.total === 0) {
        return notFound();
    }

    const article = all.data.at(0);
    if (typeof article === "undefined") {
        return notFound();
    }

    const updatedAt = new Date(article.updatedAt);

    return (
        <main className="py-12">
            <section className="max-w-xl mx-auto">
                <h1 className="text-3xl lg:text-3xl font-bold leading-tight md:leading-tight">{article.title}</h1>
                <h6 className="leading-tight md:leading-tight">Last updated {updatedAt.toDateString()}</h6>
                <article className="py-8">
                    <BlockRendererClient content={article.content} />
                </article>
            </section>
        </main>
    );
}

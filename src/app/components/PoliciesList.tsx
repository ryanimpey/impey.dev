"use client";

import { use } from "react";
import { TZenblogResponse } from "../lib/zenblog";
import { link } from "../shared/links";

type Props = {
    policiesQuery: Promise<TZenblogResponse>;
};

function PoliciesList({ policiesQuery }: Props) {
    const policies = use(policiesQuery);
    const posts = policies?.data ?? [];

    console.log("posts::", posts);

    return (
        <div className="flex flex-col gap-y-2 pt-4">
            {posts.map((p) => (
                <a
                    className="underline underline-offset-3"
                    key={p.slug}
                    href={link("/policies/:slug", { slug: p.slug })}
                >
                    {p.title}, Last Updated {new Date(p.published_at).toDateString()}
                </a>
            ))}
        </div>
    );
}

export default PoliciesList;

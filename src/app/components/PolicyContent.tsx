"use client";

import { use } from "react";
import { TZenblogPost, TZenblogResponse } from "../lib/zenblog";
import { link } from "../shared/links";

type Props = {
    policiesQuery: Promise<{
        data: TZenblogPost;
    }>;
};

function PoliciesList({ policiesQuery }: Props) {
    const policies = use(policiesQuery);
    const policy = policies?.data;

    return (
        <article>
            <h1 className="text-2xl font-mono font-bold pb-2">{policy.title}</h1>
            <div className="grid gap-y-4" dangerouslySetInnerHTML={{ __html: policy.html_content }} />
        </article>
    );
}

export default PoliciesList;

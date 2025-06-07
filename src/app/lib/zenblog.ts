"use server";

export type TZenblogResponse = {
    data: TZenblogPostOverview[];
    total: number;
    offset: number;
    limit: number;
};

export type TZenblogPost = {
    title: string;
    html_content: string;
    slug: string;
    category?: {
        name: string;
        slug: string;
    };
    tags?: [
        {
            name: string;
            slug: string;
        },
    ];
    authors?: [
        {
            slug: string;
            name: string;
            image_url?: string;
            website?: string;
            twitter?: string;
        },
    ];
    excerpt: string;
    published_at: string;
};

export type TZenblogPostOverview = {
    authors: any[];
    category: null;
    cover_image: string;
    excerpt: string;
    published_at: string;
    slug: string;
    tags: string[];
    title: string;
};

async function getPolicies(): Promise<TZenblogResponse> {
    const request = await fetch(`https://zenblog.com/api/public/blogs/67dabb06-2422-492f-b7b3-887a14b1cd3d/posts`);
    const json = request.json();

    // @ts-expect-error
    return json;
}

async function getPolicy(slug: string): Promise<TZenblogResponse> {
    const request = await fetch(
        `https://zenblog.com/api/public/blogs/67dabb06-2422-492f-b7b3-887a14b1cd3d/posts/${slug}`,
    );
    const json = request.json();

    // @ts-expect-error
    return json;
}

const zenblog = {
    getPolicy,
    getPolicies,
};

export default zenblog;

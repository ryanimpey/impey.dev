export default async function Page({
    params: paramsPromise,
}: {
    params: Promise<{ slug?: string[]; tenant: string }>;
}) {
    console.log("params::", await paramsPromise);

    return <p>Hello World!</p>;
}

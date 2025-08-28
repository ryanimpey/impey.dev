import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("https://fthnnlxoha.ufs.sh/**")],
    },
    async rewrites() {
        return [
            {
                source: "/",
                destination: "/:tenant",
                has: [
                    {
                        type: "host",
                        value: "(?<tenant>.*)",
                    },
                ],
            },
            {
                source: "/:path((?!admin|api).*)",
                destination: "/:tenant/:path*",
                has: [
                    {
                        type: "host",
                        value: "(?<tenant>.*)",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;

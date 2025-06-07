import Header from "@/app/components/Header";
import styles from "./styles.css?url";
import Footer from "@/app/components/Footer";

export const Document: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>@redwoodjs/starter-standard</title>
            <link rel="modulepreload" href="/src/client.tsx" />
            <link rel="stylesheet" href={styles} />
            <link rel="stylesheet" href="devicon.min.css" />
        </head>
        <body className={`antialiased h-screen bg-background px-4 lg:px-0`}>
            <Header />
            <section id="root">{children}</section>
            <Footer />
            <script>import("/src/client.tsx")</script>
        </body>
    </html>
);

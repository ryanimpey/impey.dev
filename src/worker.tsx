import { defineApp, ErrorResponse } from "rwsdk/worker";
import { route, render } from "rwsdk/router";
import { Document } from "@/app/Document";
import { setCommonHeaders } from "@/app/headers";
import { sessions, setupSessionStore } from "./session/store";
import { Session } from "./session/durableObject";
import { type User, db, setupDb } from "@/db";
import { env } from "cloudflare:workers";
import { Index } from "./app/pages/Index";
import { Policies } from "./app/pages/Policies";
import { Policy } from "./app/pages/Policy";
import { Projects } from "./app/pages/Projects";
import { NotFound } from "./app/layouts/NotFound";
export { SessionDurableObject } from "./session/durableObject";

export type AppContext = {
    session: Session | null;
    user: User | null;
};

export default defineApp([
    setCommonHeaders(),
    async ({ ctx, request, headers }) => {
        await setupDb(env);
        setupSessionStore(env);

        try {
            ctx.session = await sessions.load(request);
        } catch (error) {
            if (error instanceof ErrorResponse && error.code === 401) {
                await sessions.remove(request, headers);
                headers.set("Location", "/user/login");

                return new Response(null, {
                    status: 302,
                    headers,
                });
            }

            throw error;
        }

        if (ctx.session?.userId) {
            ctx.user = await db.user.findUnique({
                where: {
                    id: ctx.session.userId,
                },
            });
        }
    },
    render(Document, [
        route("/", (req) => <Index {...req} />),
        route("/projects", (req) => <Projects {...req} />),
        route("/policies", (req) => <Policies {...req} />),
        route("/policies/:slug", (req) => <Policy {...req} />),
    ]),
    // renderToStream not currently available
    // render(Document, [route("/*", (req) => new Response( renderToStream(<NotFound />), { status: 404 }))]),
]);

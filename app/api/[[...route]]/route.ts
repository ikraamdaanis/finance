import { clerkMiddleware } from "@hono/clerk-auth";
import accounts from "app/api/[[...route]]/accounts";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.use("*", clerkMiddleware());

const routes = app.route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;

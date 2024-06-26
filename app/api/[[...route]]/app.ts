import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { db } from "db/drizzle";
import { accounts } from "db/schema";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

export const app = new Hono().get("/", clerkMiddleware(), async c => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    throw new HTTPException(401, { res: c.json({ error: "unauthorized" }) });
  }

  const data = await db
    .select({ id: accounts.id, name: accounts.name })
    .from(accounts)
    .where(eq(accounts.userId, auth.userId));

  return c.json({ data });
});

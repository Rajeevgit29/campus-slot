import { connectDB } from "../server/src/db.js";
import { app } from "../server/src/app.js";

// Vercel entry point: the same Express app as server/src/index.js, served
// as a function instead of a long-running listener. Vercel provides the
// deployment's hostname; set APP_ORIGIN explicitly for a custom domain.
const host =
  process.env.VERCEL_ENV === "production"
    ? process.env.VERCEL_PROJECT_PRODUCTION_URL
    : process.env.VERCEL_URL;
process.env.APP_ORIGIN ||= host && `https://${host}`;

// One connection per function instance, shared by concurrent requests and
// retried on the next request if startup fails.
let ready;
export default async function handler(req, res) {
  ready ||= connectDB().catch((error) => {
    ready = undefined;
    throw error;
  });
  try {
    if (!/^https:\/\//.test(process.env.APP_ORIGIN || ""))
      throw new Error("APP_ORIGIN must be your production HTTPS URL.");
    await ready;
  } catch (error) {
    console.error("Startup failed:", error.message);
    res.statusCode = 503;
    res.setHeader("Content-Type", "application/json");
    return res.end(
      JSON.stringify({ error: "Service is starting. Try again shortly." }),
    );
  }
  return app(req, res);
}

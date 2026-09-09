import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const CONTACT_RECIPIENT = "info@mechlytix.in";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function jsonResponse(body: Record<string, string>, status = 200): Response {
  return Response.json(body, { status });
}

async function handleContactRequest(request: Request, env: unknown): Promise<Response> {
  if (request.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  const apiKey = getEnvValue(env, "RESEND_API_KEY");
  if (!apiKey) {
    return jsonResponse({ error: "Email delivery is not configured." }, 503);
  }
  const fromAddress =
    getEnvValue(env, "RESEND_FROM_EMAIL") ?? "Mechlytix Website <onboarding@resend.dev>";

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse({ error: "Invalid request." }, 400);
  }

  const requiredFields = ["name", "company", "email", "phone", "service", "message"] as const;
  if (requiredFields.some((field) => !payload[field]?.trim())) {
    return jsonResponse({ error: "Please complete all enquiry fields." }, 400);
  }

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [CONTACT_RECIPIENT],
      reply_to: payload.email,
      subject: `New website enquiry from ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Company: ${payload.company}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        `Area of interest: ${payload.service}`,
        "",
        payload.message,
      ].join("\n"),
    }),
  });

  if (!emailResponse.ok) {
    console.error("Resend email delivery failed", await emailResponse.text());
    return jsonResponse({ error: "We could not send your enquiry. Please try again." }, 502);
  }

  return jsonResponse({ message: "Enquiry sent successfully." });
}

function getEnvValue(env: unknown, key: string): string | undefined {
  if (env && typeof env === "object" && key in env) {
    const value = (env as Record<string, unknown>)[key];
    return typeof value === "string" && value.length > 0 ? value : undefined;
  }
  return typeof process !== "undefined" ? process.env[key] : undefined;
}

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      if (new URL(request.url).pathname === "/api/contact") {
        return await handleContactRequest(request, env);
      }
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};

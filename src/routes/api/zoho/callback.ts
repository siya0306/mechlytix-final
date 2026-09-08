import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/zoho/callback")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);

        const code = url.searchParams.get("code");
        const error = url.searchParams.get("error");

        if (error) {
          return new Response(
            `Zoho authorization failed: ${error}`,
            { status: 400 }
          );
        }

        if (!code) {
          return new Response(
            "No authorization code was received from Zoho.",
            { status: 400 }
          );
        }

        console.log("ZOHO AUTHORIZATION CODE:", code);

        return new Response(
          `
          <html>
            <head>
              <title>Zoho Authorization</title>
            </head>
            <body style="font-family: Arial; padding: 40px;">
              <h1>Zoho authorization successful</h1>
              <p>The authorization code was received.</p>
              <p>You can close this window.</p>
            </body>
          </html>
          `,
          {
            headers: {
              "Content-Type": "text/html",
            },
          }
        );
      },
    },
  },
});
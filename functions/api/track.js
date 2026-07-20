const ALLOWED_EVENTS = new Set([
  "approach_expand",
  "contact_click",
  "cv_download",
  "document_request",
  "language_change",
  "thesis_open",
]);

const clean = (value, maxLength = 120) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("Origin");
  const requestUrl = new URL(request.url);

  if (origin && new URL(origin).hostname !== requestUrl.hostname) {
    return new Response(null, { status: 403 });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const eventName = clean(payload.eventName, 48);
  if (!ALLOWED_EVENTS.has(eventName)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  await env.ANALYTICS.prepare(
    `INSERT INTO portfolio_events (event_name, target, language, path)
     VALUES (?, ?, ?, ?)`,
  )
    .bind(
      eventName,
      clean(payload.target || payload.card || payload.document || payload.to, 120),
      clean(payload.language, 8),
      clean(payload.path, 160),
    )
    .run();

  return Response.json(
    { ok: true },
    {
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
}

export function onRequest() {
  return new Response(null, {
    status: 405,
    headers: { Allow: "POST" },
  });
}

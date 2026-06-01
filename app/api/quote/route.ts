import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_PHOTOS = 5;
const MAX_PHOTO_BYTES = 10 * 1024 * 1024; // 10 MB per photo

interface IncomingPhoto {
  filename?: string;
  content?: string; // base64, no data: prefix
  contentType?: string;
}

interface QuotePayload {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  services?: string[];
  address?: string;
  notes?: string;
  photos?: IncomingPhoto[];
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 16px;font-weight:700;color:#0b1f33;vertical-align:top;white-space:nowrap;">${label}</td>
      <td style="padding:8px 16px;color:#102a43;">${value || "—"}</td>
    </tr>`;
}

export async function POST(request: Request) {
  let body: QuotePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const company = (body.company ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const email = (body.email ?? "").trim();
  const services = (Array.isArray(body.services) ? body.services : [])
    .filter((s): s is string => typeof s === "string")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 10);
  const address = (body.address ?? "").trim();
  const notes = (body.notes ?? "").trim();

  // Server-side validation mirrors the client rules.
  if (name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (email !== "" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (services.length === 0) {
    return NextResponse.json({ error: "Please choose at least one service." }, { status: 400 });
  }
  if (address.length < 5) {
    return NextResponse.json({ error: "Please enter the service address." }, { status: 400 });
  }

  const serviceText = services.join(", ");

  // Validate and prepare attachments.
  const incomingPhotos = Array.isArray(body.photos) ? body.photos.slice(0, MAX_PHOTOS) : [];
  const attachments: { filename: string; content: Buffer }[] = [];
  for (let i = 0; i < incomingPhotos.length; i++) {
    const p = incomingPhotos[i];
    if (!p?.content || typeof p.content !== "string") continue;
    if (p.contentType && !p.contentType.startsWith("image/")) continue;
    const buf = Buffer.from(p.content, "base64");
    if (buf.length === 0 || buf.length > MAX_PHOTO_BYTES) continue;
    const safeName = (p.filename || `photo-${i + 1}.jpg`).replace(/[^a-zA-Z0-9._-]/g, "_");
    attachments.push({ filename: safeName, content: buf });
  }

  const apiKey = process.env.RESEND_API_KEY;
  // QUOTE_TO_EMAIL may be a single address or a comma-separated list.
  const toEmails = (process.env.QUOTE_TO_EMAIL ?? "")
    .split(",")
    .map((addr) => addr.trim())
    .filter(Boolean);
  const fromEmail = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || toEmails.length === 0) {
    return NextResponse.json(
      {
        error:
          "Email is not configured yet. Set RESEND_API_KEY and QUOTE_TO_EMAIL in .env.local.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#0b1f33;border-bottom:2px solid #149fdc;padding-bottom:12px;">
        New quote request
      </h2>
      <table style="border-collapse:collapse;width:100%;font-size:15px;">
        ${row("Name", escapeHtml(name))}
        ${company ? row("Company", escapeHtml(company)) : ""}
        ${row("Phone", escapeHtml(phone))}
        ${email ? row("Email", escapeHtml(email)) : ""}
        ${row("Service", escapeHtml(serviceText))}
        ${row("Address", escapeHtml(address))}
        ${notes ? row("Notes", escapeHtml(notes).replace(/\n/g, "<br/>")) : ""}
        ${row("Photos", attachments.length ? `${attachments.length} attached` : "None")}
      </table>
      <p style="color:#5d6b7a;font-size:13px;margin-top:20px;">
        Sent from the Platinum Pressure Washing website quote form.
      </p>
    </div>`;

  const textLines = [
    "New quote request",
    `Name: ${name}`,
    company ? `Company: ${company}` : null,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    `Service: ${serviceText}`,
    `Address: ${address}`,
    notes ? `Notes: ${notes}` : null,
    `Photos: ${attachments.length ? `${attachments.length} attached` : "None"}`,
  ].filter(Boolean);

  try {
    const { error } = await resend.emails.send({
      from: `Platinum Pressure Washing <${fromEmail}>`,
      to: toEmails,
      replyTo: email || undefined,
      subject: `New quote request — ${name}${company ? ` (${company})` : ""}`,
      html,
      text: textLines.join("\n"),
      attachments: attachments.length ? attachments : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not send your request. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote send failed:", err);
    return NextResponse.json({ error: "Could not send your request. Please try again." }, { status: 502 });
  }
}

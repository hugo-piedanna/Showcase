import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hugo@piedanna.dev";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Contact <hugo@piedanna.dev>";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  captchaToken?: string;
  privacyAccepted?: boolean;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    throw new Error("RECAPTCHA_SECRET_KEY manquante");
  }

  const params = new URLSearchParams({
    secret,
    response: token,
  });

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  const data = (await res.json()) as {
    success?: boolean;
    "error-codes"?: string[];
  };
  return Boolean(data.success);
}

function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limited = checkRateLimit(`contact:${ip}`, {
    limit: 5,
    windowMs: 15 * 60 * 1000,
  });

  if (!limited.ok) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez dans quelques minutes." },
      {
        status: 429,
        headers: {
          "Retry-After": String(limited.retryAfterSec),
        },
      },
    );
  }

  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const captchaToken = body.captchaToken?.trim() ?? "";
  const privacyAccepted = body.privacyAccepted === true;

  if (!privacyAccepted) {
    return NextResponse.json(
      { error: "L'acceptation de la politique de confidentialité est requise." },
      { status: 400 },
    );
  }

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json(
      { error: "Indiquez un nom valide." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email) || email.length > 200) {
    return NextResponse.json(
      { error: "Indiquez une adresse e-mail valide." },
      { status: 400 },
    );
  }

  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: "Le message doit faire entre 10 et 5000 caractères." },
      { status: 400 },
    );
  }

  if (!captchaToken) {
    return NextResponse.json(
      { error: "Validation reCAPTCHA requise." },
      { status: 400 },
    );
  }

  try {
    const captchaOk = await verifyRecaptcha(captchaToken);
    if (!captchaOk) {
      return NextResponse.json(
        { error: "Échec de la vérification reCAPTCHA." },
        { status: 400 },
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Configuration reCAPTCHA incomplète côté serveur." },
      { status: 500 },
    );
  }

  const transporter = createTransport();
  if (!transporter) {
    return NextResponse.json(
      {
        error:
          "Envoi d'e-mail non configuré (SMTP_HOST / SMTP_USER / SMTP_PASS).",
      },
      { status: 500 },
    );
  }

  const safeName = name.replace(/[\r\n]/g, " ");
  const safeEmail = email.replace(/[\r\n]/g, "");

  try {
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: safeEmail,
      subject: `Contact portfolio — ${safeName}`,
      text: [`Nom : ${safeName}`, `E-mail : ${safeEmail}`, "", message].join(
        "\n",
      ),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] SMTP error:", error);
    return NextResponse.json(
      { error: "Impossible d'envoyer le message pour le moment." },
      { status: 502 },
    );
  }
}

import { NextResponse } from "next/server";
import { Client } from "minio";
import Stripe from "stripe";
const sanitize = (await import("sanitize-filename")).default;

const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT!;
const MINIO_PORT = Number(process.env.MINIO_PORT || 443);
const MINIO_USE_SSL = (process.env.MINIO_USE_SSL ?? "true") === "true";
const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY!;
const MINIO_SECRET_KEY = process.env.MINIO_SECRET_KEY!;
const MINIO_BUCKET = process.env.MINIO_BUCKET || "formations";
const PRESIGNED_EXPIRY_SEC = Number(process.env.PRESIGNED_EXPIRY_SEC || 60 * 30);
const FILE_NAME = process.env.FILE_NAME || "formations.zip";

const minioClient = new Client({
  endPoint: MINIO_ENDPOINT,
  port: MINIO_PORT,
  useSSL: MINIO_USE_SSL,
  accessKey: MINIO_ACCESS_KEY,
  secretKey: MINIO_SECRET_KEY,
});

function presignedGetObject(bucket: string, objectName: string, expiry: number) {
  return new Promise<string>((resolve, reject) => {
    // @ts-ignore
    minioClient.presignedGetObject(bucket, objectName, expiry, (err: Error | null, url?: string) => {
      if (err) return reject(err);
      if (!url) return reject(new Error("no url returned"));
      resolve(url);
    });
  });
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);
  const session_id = searchParams.get("session_id");

  console.log(PRESIGNED_EXPIRY_SEC, process.env.PRESIGNED_EXPIRY_SEC)
  
  if (!session_id) {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
  }
  
  try {
    // Récupérer la session + items + détails client
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if( session == null || session.payment_status !== "paid") {
      return NextResponse.json({ error: "Invalid session or payment not completed" }, { status: 400 });
    }
  
    const filename = sanitize(FILE_NAME);
    if (!filename) return NextResponse.json({ error: "invalid filename" }, { status: 400 });

    const url = await presignedGetObject(MINIO_BUCKET, filename, PRESIGNED_EXPIRY_SEC);
    return NextResponse.json({ url });
      
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
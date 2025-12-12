import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const session_id = searchParams.get("session_id");
  const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

  // Validation stricte du session_id (format Stripe)
  if (!session_id || !session_id.startsWith('cs_')) {
    console.warn(`[SECURITY] Invalid session_id format in checkout-session from IP ${clientIp}`);
    return NextResponse.json({ error: "Missing or invalid session_id" }, { status: 400 });
  }

  if (session_id.length < 20 || session_id.length > 200) {
    console.warn(`[SECURITY] Suspicious session_id length in checkout-session from IP ${clientIp}`);
    return NextResponse.json({ error: "Invalid session_id" }, { status: 400 });
  }

  console.log(`[INFO] Checkout session request for ${session_id} from IP ${clientIp}`);

  try {
    // Récupérer la session + items + détails client
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items", "customer"],
    });

    let firstName = null;

    if( session == null || session.payment_status !== "paid") {
      return NextResponse.json({ error: "Invalid session or payment not completed" }, { status: 400 });
    }

    const paymentIntentId = session.payment_intent as string;
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    const paymentTime = paymentIntent.created * 1000; // timestamp en ms
    const now = Date.now();

    if (now - paymentTime > 5 * 60 * 1000) {
      return NextResponse.json({ error: "Le lien de remerciement a expiré." }, { status: 400 });
    }

    session.custom_fields?.forEach((field) => {
        if (field.key === "prenom" || "prnom") firstName = field.text?.value || null;
    });

    // Infos articles
    const items =
      (session.line_items?.data || []).map((item) => (item.description)) ?? [];

    return NextResponse.json({
      email: session.customer_details?.email,
      firstName,
      items,
      price: session.amount_total,
    });
  } catch (err: any) {
    console.error(`[ERROR] Checkout session API error from IP ${clientIp}:`, err.message);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
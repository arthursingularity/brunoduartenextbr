import { headers } from "next/headers";
import Stripe from "stripe";
import crypto from "crypto";

// Normaliza strings para o padrão do Meta
function normalize(str = "") {
  return str.trim().toLowerCase();
}

// Aplica SHA256
function hashSHA256(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

export async function POST(req) {
  // ❗ Inicializar Stripe dentro da função (evita erro no Vercel)
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const body = await req.text();
  const sig = headers().get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Erro no Webhook Stripe:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // ------------------------------
  //  EVENTO PRINCIPAL: COMPRA
  // ------------------------------
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const email = session.customer_details?.email || "";
    const amount = session.amount_total / 100;
    const plan = session.metadata?.plan || "Plano não informado";

    // 👇 Mesma lógica usada no Pixel para deduplicação
    const eventId = session.id;

    // Envia ao Meta CAPI
    await sendPurchaseToMeta({
      amount,
      email,
      plan,
      eventId,
    });

    console.log("✔ Evento Purchase enviado ao Meta CAPI");
  }

  return new Response("OK", { status: 200 });
}

// ------------------------------
// Envio ao Meta CAPI
// ------------------------------

async function sendPurchaseToMeta({ amount, email, plan, eventId }) {
  const pixelId = process.env.FACEBOOK_PIXEL_ID;
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

  const url = `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${accessToken}`;

  const normalizedEmail = email ? normalize(email) : null;
  const hashedEmail = normalizedEmail ? hashSHA256(normalizedEmail) : undefined;

  const payload = {
    data: [
      {
        event_name: "Purchase",
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        event_source_url: "https://www.brunoduartepersonal.com.br",
        user_data: {
          em: hashedEmail,
        },
        custom_data: {
          currency: "BRL",
          value: amount,
          plan,
        },
      },
    ],
    ...(process.env.FACEBOOK_TEST_CODE
      ? { test_event_code: process.env.FACEBOOK_TEST_CODE }
      : {}),
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    const resultado = await res.json();
    console.log("➡ Resposta Meta:", resultado);
  } catch (error) {
    console.error("❌ Erro ao enviar evento ao Meta:", error);
  }
}

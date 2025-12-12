import Stripe from "stripe";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { priceId, plan } = await req.json();

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: "https://www.brunoduartepersonal.com.br/sucesso",
    cancel_url: "https://www.brunoduartepersonal.com.br/",
    metadata: {
      plan,
    },
  });

  return new Response(JSON.stringify({ url: session.url }), {
    status: 200,
  });
}

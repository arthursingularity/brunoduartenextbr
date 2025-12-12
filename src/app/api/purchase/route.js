import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const fbResponse = await fetch(
      `https://graph.facebook.com/v18.0/${process.env.FACEBOOK_PIXEL_ID}/events`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              event_name: "Purchase",
              event_time: Math.floor(Date.now() / 1000),
              action_source: "website",
              event_source_url: body.url,
              user_data: {
                email: body.email ? [body.email] : [],
              },
              custom_data: {
                currency: "BRL",
                value: body.amount,
                plan: body.plan,
              },
            },
          ],
          access_token: process.env.FACEBOOK_ACCESS_TOKEN,
        }),
      }
    );

    const result = await fbResponse.json();

    return NextResponse.json(result);
  } catch (error) {
    console.log("CAPI ERROR", error);
    return NextResponse.json({ error: true });
  }
}

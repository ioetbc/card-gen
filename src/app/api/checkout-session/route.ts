const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const YOUR_DOMAIN = "http://localhost:3000";

export async function POST(request: Request) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1NjmtYIY0eYGMuAykUnPVdb4",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/payment-success`,
    cancel_url: `${YOUR_DOMAIN}/payment-error`,
  });

  console.log("session.url", session.url);
  return new Response(
    JSON.stringify({
      url: session.url,
    }),
    {
      headers: {"Content-Type": "application/json"},
    }
  );
}

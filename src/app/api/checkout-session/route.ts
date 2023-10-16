const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const YOUR_DOMAIN = "http://localhost:3000";

export async function GET() {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: process.env.STRIPE_PRODUCT_ID,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/payment-success`,
    cancel_url: `${YOUR_DOMAIN}/payment-error`,
    shipping_address_collection: {
      allowed_countries: ["GB"],
    },
  });

  return new Response(
    JSON.stringify({
      url: session.url,
    }),
    {
      headers: {"Content-Type": "application/json"},
    }
  );
}

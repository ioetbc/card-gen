import {NextRequest} from "next/server";
import Stripe from "stripe";
import {db} from "../firebase";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function constructStripeEvent(
  body: any,
  sig: string,
  signingSecretWebhook: string
): Promise<Stripe.Event> {
  try {
    return await stripe.webhooks.constructEvent(
      body,
      sig,
      signingSecretWebhook
    );
  } catch (err: any) {
    throw new Error(`Error constructing stripe event: ${err.message}`);
  }
}

async function addCustomerToFirestore(sessionWithLineItems: any) {
  try {
    const customerData = {
      email: sessionWithLineItems.customer_details.email,
      name: sessionWithLineItems.customer_details.name,
      phone: sessionWithLineItems.customer_details.phone,
      address: sessionWithLineItems.shipping_details.address,
    };

    const docRef = await db.collection("customers").add(customerData);
    console.log(`Customer added with ID: ${docRef.id}`);
  } catch (error) {
    console.error("Error adding customer:", error);
  }
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) return new Response("No signature", {status: 400});

  const event = await constructStripeEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  );

  if (event.type !== "checkout.session.completed") return new Response();

  const {data} = JSON.parse(body);

  const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
    data.object.id,
    {
      expand: ["line_items"],
    }
  );

  await addCustomerToFirestore(sessionWithLineItems);

  return new Response();
}

// TODO - add endpoint to production ere: https://stripe.com/docs/webhooks#register-webhook
// TODO - Verify the request came from stripe: // Find your endpoint's secret in your Dashboard's webhook settings

import {NextRequest} from "next/server";
import {db} from "../firebase";
import OpenAI from "openai";

import mapKeys from "lodash/mapKeys";
import camelCase from "lodash/camelCase";
import set from "lodash/set";
import {TCard} from "@/app/types";

type Meta = {
  H: number;
  W: number;
  file_prefix: string;
  guidance_scale: number;
  init_image: string;
  n_samples: number;
  negative_prompt: string;
  outdir: string;
  prompt: string;
  safetychecker: string;
  seed: number;
  steps: number;
  strength: number;
};

type TBody = {
  status: string;
  webhook_type: string;
  track_id: string;
  id: number;
  meta: Meta;
  output: string[];
};

const getPrompt = (prompt: string) => {
  return `Can you summarise this in a short sentence between 2 and 4 words ### ${prompt}`;
};

export async function POST(request: NextRequest) {
  const body = (await request.json()) as TBody;

  if (body.status !== "success") return new Response();

  const openai = new OpenAI({
    apiKey: process.env.GPT_API_SECRET,
  });

  console.log("body mate", body);

  const response = {
    ...mapKeys(body.meta, (_, key) => camelCase(key)),
    images: body.output,
  } as TCard;

  if (response.prompt) {
    const content = getPrompt(response.prompt);
    console.log("content", content);

    const gptResponse = await openai.chat.completions.create({
      messages: [{role: "user", content}],
      model: "gpt-3.5-turbo",
    });

    console.log("gptResponse", gptResponse.choices);

    set(response, "title", gptResponse.choices[0].message.content);
  }

  const userId = body.track_id;

  try {
    const cardDocRef = db
      .collection("user")
      .doc(userId)
      .collection("cards")
      .doc();

    console.log("setting card", response);

    await cardDocRef.set(response);
    console.log(`New card for user ${userId} added. via webhook`);
  } catch (error) {
    console.error("Error updating card for user:", error);
  }

  return new Response(JSON.stringify(response), {
    headers: {"Content-Type": "application/json"},
  });
}

import {NextRequest} from "next/server";
import {db} from "../firebase";

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

export async function POST(request: NextRequest) {
  const body = (await request.json()) as TBody;

  if (body.status !== "success") return new Response();

  const response = {
    images: body.output,
    guidanceScale: body.meta.guidance_scale,
    initImage: body.meta.init_image,
    samples: body.meta.n_samples,
    negativePrompt: body.meta.negative_prompt,
    prompt: body.meta.prompt,
    seed: body.meta.seed,
    steps: body.meta.steps,
    strength: body.meta.strength,
  };

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

import {STABLE_DIFFUSION_URL} from "@/app/constants";
import fetch from "node-fetch";

export async function POST(request: Request) {
  const {prompt} = await request.json();

  if (!prompt) {
    return new Response("prompt is required", {status: 400});
  }

  const response = await fetch(STABLE_DIFFUSION_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      key: process.env.STABLE_DIFFUSION_API_KEY,
      prompt,
      negative_prompt: null,
      init_image:
        "https://raw.githubusercontent.com/CompVis/stable-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
      width: "512",
      height: "512",
      samples: "1",
      num_inference_steps: "30",
      safety_checker: "no",
      enhance_prompt: "yes",
      guidance_scale: 7.5,
      strength: 0.7,
      seed: null,
      webhook: null,
      track_id: null,
    }),
  });

  const data = (await response.json()) as any;

  console.log("data", data);

  return new Response(JSON.stringify(data), {
    headers: {"Content-Type": "application/json"},
  });
}

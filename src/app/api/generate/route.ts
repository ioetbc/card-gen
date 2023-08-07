import fetch from "node-fetch";

import {STABLE_DIFFUSION_IMAGE_2_IMAGE_URL} from "@/app/constants";

// get this file from s3
const testImage =
  "https://rubberducker-user-uploads.s3.eu-west-2.amazonaws.com/test-image.png";

export async function POST(request: Request) {
  const {prompt} = await request.json();

  if (!prompt) {
    return new Response("prompt is required", {status: 400});
  }

  const response = await fetch(STABLE_DIFFUSION_IMAGE_2_IMAGE_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      key: process.env.STABLE_DIFFUSION_API_KEY,
      prompt,
      negative_prompt: null,
      init_image: testImage,
      width: "512",
      height: "512",
      samples: "4",
    }),
  });

  const data = (await response.json()) as any;

  console.log("data", data);

  return new Response(JSON.stringify(data), {
    headers: {"Content-Type": "application/json"},
  });
}

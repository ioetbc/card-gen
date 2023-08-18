import fetch from "node-fetch";

import {STABLE_DIFFUSION_IMAGE_2_IMAGE_URL} from "@/app/constants";

// get this file from s3
const testImage =
  "https://rubberducker-user-uploads.s3.eu-west-2.amazonaws.com/upload/test-p2.jpeg";

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
      negative_prompt:
        "extra limbs, poorly drawn face, poorly drawn hands, disfigured, deformed, bad anatomy, distorted face, multiple faces, multiple chins",
      init_image: testImage,
      strength: 0.4,
      width: "512",
      height: "512",
      samples: 1,
      webhook: "https://hooks.zapier.com/hooks/catch/16204757/399dy56/",
    }),
  });

  const data = (await response.json()) as any;

  console.log("wtf data", data);

  return new Response(JSON.stringify(data), {
    headers: {"Content-Type": "application/json"},
  });
}

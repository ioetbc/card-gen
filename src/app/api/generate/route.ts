import fetch from "node-fetch";

import {STABLE_DIFFUSION_IMAGE_2_IMAGE_URL} from "@/app/constants";
import {TArtisticStyle} from "@/app/types";

type MuddlePromptTogetherProps = {
  prompt: string;
  artisticStyle: TArtisticStyle;
};

const mapArtisticStylc = (artisticStyle: TArtisticStyle) => {
  switch (artisticStyle) {
    case "3d":
      return "photograph";
    case "art-deco":
      return "Art deco";
    case "art-nouveau":
      return "Art nouveau";
    case "charcoal":
      return "Charcoal";
    case "comic":
      return "Comic";
    case "cubisim":
      return "Cubism";
    case "john-sargent":
      return "John Sargent";
    case "pop-art":
      return "Pop art";
    case "stone-sculpture":
      return "Stone sculpture";
    case "van-gogh":
      return "Vincent van Gogh";
    default:
      return "photograph";
  }
};

const muddlePromptTogether = ({
  prompt,
  artisticStyle,
}: MuddlePromptTogetherProps) => {
  console.log("prompt", prompt);
  console.log("artisticStyle", artisticStyle);
  // "A photograph of a man wearing glasses, cubism, by Vincent van Gogh, detailed, colorful, HD, low key"

  const thing = `${prompt}, ${mapArtisticStylc(
    artisticStyle
  )}, colorful, HD, low key`;

  console.log("thing", thing);
  return thing;
};

// get this file from s3
const testImage =
  "https://rubberducker-user-uploads.s3.eu-west-2.amazonaws.com/upload/thing.jpeg";
// const testImage =
//   "https://rubberducker-user-uploads.s3.eu-west-2.amazonaws.com/upload/test-p2.jpeg";

export async function POST(request: Request) {
  const {prompt, artisticStyle} = await request.json();

  if (!prompt) {
    return new Response("prompt is required", {status: 400});
  }

  const response = await fetch(STABLE_DIFFUSION_IMAGE_2_IMAGE_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      key: process.env.STABLE_DIFFUSION_API_KEY,
      prompt: muddlePromptTogether({prompt, artisticStyle}),
      negative_prompt:
        "extra limbs, poorly drawn face, poorly drawn hands, disfigured, deformed, bad anatomy, distorted face, multiple faces, multiple chins",
      init_image: testImage,
      strength: 0.6,
      // guidance_scale: 8,
      width: "512",
      height: "512",
      samples: "2",
      webhook: "https://hooks.zapier.com/hooks/catch/16204757/399dy56/",
    }),
  });

  const data = (await response.json()) as any;

  console.log("wtf data", data);

  return new Response(JSON.stringify(data), {
    headers: {"Content-Type": "application/json"},
  });
}

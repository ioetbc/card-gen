import {
  NEGATIVE_PROMPT,
  STABLE_DIFFUSION_IMAGE_2_IMAGE_URL,
  STABLE_DIFFUSION_TEXT_2_IMAGE_URL,
} from "@/app/constants";
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

  const thing = `${prompt}, ${mapArtisticStylc(
    artisticStyle
  )}, colorful, HD, low key`;

  console.log("thing", thing);
  return thing;
};

export async function POST(request: Request) {
  const {userId, initialImage, prompt, artisticStyle} = await request.json();

  console.log("initialImage", initialImage);

  if (!prompt) {
    return new Response("prompt is required", {status: 400});
  }

  const api = initialImage
    ? STABLE_DIFFUSION_IMAGE_2_IMAGE_URL
    : STABLE_DIFFUSION_TEXT_2_IMAGE_URL;

  const body = {
    key: process.env.STABLE_DIFFUSION_API_KEY,
    prompt: muddlePromptTogether({prompt, artisticStyle}),
    negative_prompt: NEGATIVE_PROMPT,
    ...(initialImage && {init_image: initialImage}),
    strength: 0.6,
    width: "512",
    height: "512",
    samples: "1",
    webhook: "https://3f14-188-28-106-173.ngrok-free.app/api/webhook-thing",
    track_id: userId,
  };

  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log("wtf data", data);

    return new Response();
  } catch (cause) {
    console.log("somethign fucked up cause", cause);
    return new Response("something went wrong", {status: 500});
  }
}

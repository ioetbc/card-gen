import {
  NEGATIVE_PROMPT,
  STABLE_DIFFUSION_IMAGE_2_IMAGE_URL,
  STABLE_DIFFUSION_TEXT_2_IMAGE_URL,
} from "@/app/constants";
import {ECardSize, TArtisticStyle, TCardSize} from "@/app/types";

type MuddlePromptTogetherProps = {
  prompt: string;
  artisticStyle: TArtisticStyle;
};

const mapArtisticStylc = (artisticStyle: TArtisticStyle) => {
  switch (artisticStyle) {
    case "3d":
      return "3d";
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
    case "picasso":
      return "Picasso";
    default:
      return "photograph";
  }
};

const muddlePromptTogether = ({
  prompt,
  artisticStyle,
}: MuddlePromptTogetherProps) => {
  return `${prompt}, in the artistic style of ${mapArtisticStylc(
    artisticStyle
  )}`;
};

const widthAndHeight = (size: TCardSize) => {
  switch (size) {
    case ECardSize.LANDSCAPE:
      return {
        width: "512",
        height: "512",
      };
    case ECardSize.PORTRAIT:
      return {
        width: "512",
        height: "512",
      };
    case ECardSize.SQUARE:
      return {
        width: "512",
        height: "512",
      };
  }
};

export const maxDuration = 300;

export async function POST(request: Request) {
  const {userId, initialImage, prompt, artisticStyle, size} =
    await request.json();

  console.log("initialImage", initialImage);
  console.log("artisticStyle", artisticStyle);

  if (!prompt) {
    return new Response("prompt is required", {status: 400});
  }

  const api = initialImage
    ? STABLE_DIFFUSION_IMAGE_2_IMAGE_URL
    : STABLE_DIFFUSION_TEXT_2_IMAGE_URL;

  console.log("process.env.VERCEL_URLs", process.env.VERCEL_URL);

  const body = {
    key: process.env.STABLE_DIFFUSION_API_KEY,
    prompt: muddlePromptTogether({prompt, artisticStyle}),
    ...widthAndHeight(size),
    negative_prompt: NEGATIVE_PROMPT,
    ...(initialImage && {init_image: initialImage}),
    strength: 0.8,
    samples: "4",
    webhook: "https://cardtothefuture.com/api/webhook-thing",
    track_id: userId,
  };

  console.log("body", body);

  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body),
    });

    const data = await response.json();

    console.log("data", data);

    if (data.status === "error") {
      throw new Error("Error generating card");
    }

    return new Response(JSON.stringify(data), {
      headers: {"Content-Type": "application/json"},
    });
  } catch (cause) {
    console.log("somethign fucked up cause", cause);
    return new Response("something went wrong", {status: 500});
  }
}

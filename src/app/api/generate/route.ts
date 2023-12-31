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
  if (!artisticStyle) return "";
  let style = "";

  switch (artisticStyle) {
    case "3d":
      style = "3d";
      break;
    case "art-deco":
      style = "Art deco";
      break;
    case "art-nouveau":
      style = "Art nouveau";
      break;
    case "charcoal":
      style = "Charcoal";
      break;
    case "comic":
      style = "Comic";
      break;
    case "cubisim":
      style = "Cubism";
      break;
    case "john-sargent":
      style = "John Sargent";
      break;
    case "pop-art":
      style = "Pop art";
      break;
    case "stone-sculpture":
      style = "Stone sculpture";
      break;
    case "van-gogh":
      style = "Vincent van Gogh";
      break;
    case "picasso":
      style = "Picasso";
      break;
    default:
      style = "";
      break;
  }

  return `, in the artistic style of ${style}`;
};

const muddlePromptTogether = ({
  prompt,
  artisticStyle,
}: MuddlePromptTogetherProps) => {
  return `${prompt} ${mapArtisticStylc(artisticStyle)}`;
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

export const maxDuration = 10;

export async function POST(request: Request) {
  const {userId, initialImage, prompt, artisticStyle, size} =
    await request.json();

  if (!prompt) {
    return new Response("prompt is required", {status: 400});
  }

  const api = initialImage
    ? STABLE_DIFFUSION_IMAGE_2_IMAGE_URL
    : STABLE_DIFFUSION_TEXT_2_IMAGE_URL;

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

  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (data.status === "error") {
      throw new Error("Error generating card");
    }

    return new Response(JSON.stringify(data), {
      headers: {"Content-Type": "application/json"},
    });
  } catch (cause) {
    return new Response("something went wrong", {status: 500});
  }
}

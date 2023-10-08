import {db} from "../firebase";
import {
  NEGATIVE_PROMPT,
  STABLE_DIFFUSION_IMAGE_2_IMAGE_URL,
  STABLE_DIFFUSION_TEXT_2_IMAGE_URL,
} from "@/app/constants";
import {ECardSize, TArtisticStyle, TCardSize} from "@/app/types";
import set from "lodash/set";
import {generateCardTitle} from "../utils/gpt/generate-card-title";
import {getCardRef} from "../utils/db/get-card-ref";
import {mapSnakeToCamel} from "../utils/db/map-snake-to-camel";
import {setCard} from "../utils/db/set-card";

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
    webhook: "https://card-gen-git-main-ioetbc.vercel.app/api/webhook-thing",
    track_id: userId,
  };

  console.log("body", body);

  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body),
    });

    // return new Response(JSON.stringify("rely on the webhook???"), {
    //   headers: {"Content-Type": "application/json"},
    // });

    const data = await response.json();

    console.log("data", data);

    if (data.status === "success") {
      try {
        console.log(`New card for user ${userId} added. via generate route`);
        await setCard({data, userId});
      } catch (error) {
        console.error("Error updating card for user:", error);
        throw new Error("Error generating card");
      }
    }

    if (data.status === "error") {
      throw new Error("Error generating card");
    }

    if (data.status === "processing") {
      console.log("still processing, relying on the webhook");
      // OWWW I think add to the response if the toast should show on the front end. Can also add the title etc
      // And in webhook thing also return the toast status
    }

    return new Response(JSON.stringify(data), {
      headers: {"Content-Type": "application/json"},
    });
  } catch (cause) {
    console.log("somethign fucked up cause", cause);
    return new Response("something went wrong", {status: 500});
  }
}

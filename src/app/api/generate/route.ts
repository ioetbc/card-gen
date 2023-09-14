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

  try {
    const response = await fetch(STABLE_DIFFUSION_IMAGE_2_IMAGE_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        key: process.env.STABLE_DIFFUSION_API_KEY,
        prompt: muddlePromptTogether({prompt, artisticStyle}),
        negative_prompt:
          "extra limbs, poorly drawn face, poorly drawn hands, disfigured, deformed, bad anatomy, distorted face, multiple faces, multiple chins",
        init_image: initialImage,
        strength: 0.6,
        width: "512",
        height: "700",
        samples: "1",
        webhook: "https://04c7-62-255-165-242.ngrok-free.app/api/webhook-thing",
        track_id: userId,
      }),
    });

    const data = (await response.json()) as any;

    console.log("wtf data", data);

    return new Response(JSON.stringify(data), {
      headers: {"Content-Type": "application/json"},
    });
  } catch (cause) {
    console.log("somethign fucked up cause", cause);
    return new Response("something went wrong", {status: 500});
  }
}

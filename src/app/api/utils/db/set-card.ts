import {TStableDiffusionBody} from "@/app/types";
import {generateCardTitle} from "../gpt/generate-card-title";
import {getCardRef} from "./get-card-ref";
import {mapSnakeToCamel} from "./map-snake-to-camel";
import set from "lodash/set";

type setCardProps = {
  data: TStableDiffusionBody;
  userId: string;
};

export const setCard = async ({data, userId}: setCardProps) => {
  const card = mapSnakeToCamel({data});

  if (card.prompt) {
    const title = await generateCardTitle({prompt: card.prompt});
    set(card, "title", title);
  }

  set(card, "createdAt", new Date());

  console.log("card", card);

  try {
    const ref = getCardRef({userId});
    await ref.set(card);

    console.log(`New card for user ${userId} added. via webhook`);
  } catch (error) {
    console.error("Error updating card for user:", error);
  }

  return new Response(JSON.stringify(card), {
    headers: {"Content-Type": "application/json"},
  });
};

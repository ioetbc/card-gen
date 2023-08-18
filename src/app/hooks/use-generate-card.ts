import {useMutation} from "@tanstack/react-query";
import {TArtisticStyle} from "../types";

type UseGenerateCardProps = {
  prompt: string;
  artisticStyle: TArtisticStyle | null;
};

export const useGenerateCard = () => {
  return useMutation(async ({prompt, artisticStyle}: UseGenerateCardProps) => {
    const response = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({prompt, artisticStyle}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  });
};

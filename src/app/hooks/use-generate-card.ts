import {useMutation} from "@tanstack/react-query";
import {TArtisticStyle} from "../types";

type UseGenerateCardProps = {
  userId: string;
  prompt: string;
  artisticStyle: TArtisticStyle | null;
  initialImage?: string;
};

export const useGenerateCard = () => {
  return useMutation(
    async ({
      userId,
      initialImage,
      prompt,
      artisticStyle,
    }: UseGenerateCardProps) => {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({
          userId,
          initialImage,
          prompt,
          artisticStyle,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return data;
    }
  );
};

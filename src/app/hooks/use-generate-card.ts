import {useMutation} from "@tanstack/react-query";
import {TArtisticStyle, TCardSize} from "../types";

type UseGenerateCardProps = {
  userId: string;
  prompt: string;
  artisticStyle: TArtisticStyle | null;
  initialImage: string | null;
  size: TCardSize;
};

export const useGenerateCard = () => {
  return useMutation(
    async ({
      userId,
      initialImage,
      prompt,
      artisticStyle,
      size,
    }: UseGenerateCardProps) => {
      console.log("calling", userId);
      const response = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({
          userId,
          initialImage,
          prompt,
          artisticStyle,
          size,
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

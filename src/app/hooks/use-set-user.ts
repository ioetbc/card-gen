import {useMutation} from "@tanstack/react-query";

type UseGenerateCardProps = {
  userId: string;
  initialImage: string;
};

export const useSetUser = () => {
  return useMutation(async ({userId, initialImage}: UseGenerateCardProps) => {
    const response = await fetch("/api/set-user", {
      method: "POST",
      body: JSON.stringify({
        userId,
        initialImage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  });
};

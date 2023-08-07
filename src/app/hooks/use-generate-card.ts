import {useMutation} from "@tanstack/react-query";

export const useGenerateCard = () => {
  return useMutation(async ({prompt}: {prompt: string}) => {
    const response = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({prompt}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  });
};

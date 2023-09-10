import {useMutation} from "@tanstack/react-query";

type UseGenerateCardProps = {
  userId: string;
  initialImage: string;
};

export const UseSetUser = () => {
  return useMutation(async ({userId, initialImage}: UseGenerateCardProps) => {
    console.log("calling endpoint with these args", {userId, initialImage});

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

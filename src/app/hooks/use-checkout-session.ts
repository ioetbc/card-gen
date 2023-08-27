import {useMutation} from "@tanstack/react-query";

export const useCheckoutSession = () => {
  return useMutation(async () => {
    const response = await fetch("/api/checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  });
};

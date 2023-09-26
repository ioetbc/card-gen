import {useMutation} from "@tanstack/react-query";

export const useCheckoutSession = () => {
  console.log("calling checkout api");
  return useMutation(async () => {
    const response = await fetch("/api/checkout-session", {
      method: "POST",
    });

    const data = await response.json();
    return data;
  });
};

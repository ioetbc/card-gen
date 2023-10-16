import {useQuery} from "@tanstack/react-query";

export const useCheckoutSession = () => {
  return useQuery({
    queryKey: ["checkout-session"],
    queryFn: async () => {
      console.log("calling checkout-session endpoint");
      const response = await fetch("/api/checkout-session", {
        method: "GET", // Changed to a GET request
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    },
  });
};

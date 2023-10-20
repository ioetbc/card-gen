import {useMutation} from "@tanstack/react-query";
import {TArtisticStyle, TCardSize} from "../types";

type UsePostcodeLookupProps = {
  postcode: string;
};

export const usePostcodeLookup = () => {
  return useMutation(async ({postcode}: UsePostcodeLookupProps) => {
    const response = await fetch("/api/postcode-lookup", {
      method: "POST",
      body: JSON.stringify({
        postcode,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  });
};

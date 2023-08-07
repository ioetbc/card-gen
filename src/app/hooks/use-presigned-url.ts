import {useMutation} from "@tanstack/react-query";

export const usePresignedURL = () => {
  return useMutation(
    async ({
      fileName,
      contentType,
    }: {
      fileName: string;
      contentType: string;
    }) => {
      const response = await fetch("/api/get-presigned-url", {
        method: "POST",
        body: JSON.stringify({fileName: "test.jpg", contentType: "image/jpg"}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const url = await response.json();
      return url;
    }
  );
};

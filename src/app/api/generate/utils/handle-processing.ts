type HandleProcessingProps = {
  eta: number;
  fetchEndpoint: string;
};

export const handleProcessing = ({
  eta,
  fetchEndpoint,
}: HandleProcessingProps) => {
  return new Promise(async (resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(
          `${fetchEndpoint}?key=${process.env.STABLE_DIFFUSION_API_KEY}`,
          {
            method: "POST",
          }
        );

        if (!response) {
          reject(
            new Response("failed to fetch processing image", {status: 500})
          );
          return;
        }

        const thing: any = await response.json();

        console.log("thing", thing);

        resolve(thing);
      } catch (error) {
        reject(error);
      }
    }, eta * 1000);
  });
};

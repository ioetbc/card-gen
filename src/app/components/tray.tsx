import React from "react";
import {Button} from "./buttons/primary-button";
import Image from "next/image";
import {useRouter} from "next/navigation";

export const Tray = () => {
  const router = useRouter();

  return (
    <div className="bg-something-100 shadow-card h-full rounded-xl">
      <div className="p-4 border-b border-gray-200">
        <div className="flex gap-2 flex-col">
          <h2 className="text-2xl">Generate a new card</h2>

          <p className="text-sm text-gray-500">
            Make your own custom greeting card using text to image AI.
          </p>
        </div>
      </div>
      <p className="p-4 text-center text-sm  border-b border-gray-200">
        Use the input below to generate a new card based off your prompt. Upload
        an image for a starting point for Stable Diffusion.
      </p>
      <div className="flex flex-col gap-4">
        <div className="border-b border-gray-200 px-4 flex items-center py-4">
          <div className="px-4 flex items-center">
            <div className="flex items-center gap-4 col-span-2">
              <Image
                src="/ruler.svg"
                width={20}
                height={20}
                alt="artistic style"
              />
              <p className="text-sm">Choose the size of your card</p>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 px-4 flex items-center pb-4">
          <div className="px-4 flex items-center">
            <div className="flex items-center gap-4 col-span-2">
              <Image
                src="/crumpled-paper.svg"
                width={20}
                height={20}
                alt="upload file"
              />
              <p className="text-sm">Create a custom AI card</p>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 px-4 flex items-center pb-4">
          <div className="px-4 flex items-center">
            <div className="flex items-center gap-4 col-span-2">
              <Image src="/eye.svg" width={20} height={20} alt="upload file" />
              <p className="text-sm">1st class delivery</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-end px-4 py-4">
          <Button
            size="full"
            label="Generate a card"
            type="primary"
            handleOnClick={() => router.push("/my-cards")}
          />
        </div>
      </div>
    </div>
  );
};

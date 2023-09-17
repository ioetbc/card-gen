import React from "react";
import {Input} from "./inputs/input";
import Image from "next/image";

type PromptProps = {
  prompt: string;
  setPrompt: (value: string) => void;
  handleSubmit: () => void;
  loading: boolean;
};

export const Prompt = ({
  prompt,
  setPrompt,
  handleSubmit,
  loading,
}: PromptProps) => {
  return (
    <div className="flex flex-col">
      <div className="px-4 py-6">
        <Input
          handleChange={(value) => setPrompt(value)}
          placeholder="A happy dog sitting in front"
          handleSubmit={handleSubmit}
          icon={loading ? "loading" : "search"}
        />
      </div>
      <div className="border-t border-b border-gray-200 px-4 flex items-center">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center gap-4 col-span-2 border-r border-gray-200 pr-4 py-6">
            <Image
              src="/artistic-icon.svg"
              width={20}
              height={20}
              alt="artistic style"
            />
            <p className="text-sm">Artistic style</p>
          </div>
          <div className="flex items-center gap-4 col-span-2 pr-4 py-6">
            <Image src="/upload.svg" width={20} height={20} alt="upload file" />
            <p className="text-sm">Upload image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

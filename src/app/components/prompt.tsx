import React from "react";
import {Input} from "./inputs/input";
import {Select} from "./inputs/select";
import {TArtisticStyle} from "../types";
import {DragDrop} from "./drag-drop";
import {ARTISTIC_STYLES, CARD_SIZES} from "../constants";

type PromptProps = {
  prompt: string;
  placeholder: string;
  setPrompt: (value: string) => void;
  setArtisticStyle: (value: any) => void;
  size: string;
  setSize: (value: any) => void;
  artisticStyle: TArtisticStyle | null;
  handleSubmit: () => void;
  loading: boolean;
  handleFile: (file: File) => void;
};

export const Prompt = ({
  prompt,
  setPrompt,
  placeholder,
  setArtisticStyle,
  size,
  setSize,
  artisticStyle,
  handleSubmit,
  loading,
  handleFile,
}: PromptProps) => {
  return (
    <div className="flex flex-col">
      <div className="px-4 py-6">
        <Input
          handleChange={setPrompt}
          placeholder={placeholder}
          handleSubmit={handleSubmit}
          icon={loading ? "loading" : "search"}
          value={prompt}
        />
      </div>
      <div className="flex items-center px-4">
        <div className="w-full">
          <div className="flex items-center">
            <Select
              state={artisticStyle}
              setState={setArtisticStyle}
              borderType="left"
              options={ARTISTIC_STYLES}
              icon="artistic-icon"
              placeholder="Art style"
            />
            <Select
              state={size}
              setState={setSize}
              borderType="right"
              options={CARD_SIZES}
              icon="ruler"
              placeholder="Square"
            />
          </div>
          <DragDrop onFile={handleFile} url={""} />
        </div>
      </div>
    </div>
  );
};

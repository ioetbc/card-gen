import React from "react";
import {Tooltip} from "@chakra-ui/react";

import {Accordion} from "./accordion";
import {DragDrop} from "./drag-drop";
import {TextArea} from "./inputs/text-area";
import {ArtisticStyle} from "./artistic-style";
import {ARTISTIC_STYLES} from "../constants";
import {TArtisticStyle} from "../types";

interface NavigationProps {
  handlePromptChange: (value: string) => void;
  handleMessageChange: (value: string) => void;
  handleGenerateCard: () => void;
  handleArtisticStyleChange: (value: TArtisticStyle) => void;
  handleFile: (file: File) => void;
  hasArtisticStyle: boolean;
  hasPrompt: boolean;
  hasMessage: boolean;
  hasFile: boolean;
  url: string;
}

export const Navigation = ({
  handlePromptChange,
  handleGenerateCard,
  handleMessageChange,
  handleArtisticStyleChange,
  handleFile,
  hasPrompt,
  hasMessage,
  hasFile,
  hasArtisticStyle,
  url,
}: NavigationProps) => {
  const data = [
    {
      title: "Upload an image",
      children: <DragDrop onFile={handleFile} url={url} />,
      active: true,
      isComplete: hasFile,
    },
    {
      title: "Prompt",
      children: (
        <TextArea
          placeholder="A photograph of a man wearing glasses, cubism, by Vincent van Gogh, detailed, colorful, HD, low key"
          handleChange={handlePromptChange}
        />
      ),
      isComplete: hasPrompt,
      active: false,
    },
    {
      title: "Artistc style",
      children: (
        <ArtisticStyle
          hasArtisticStyle={hasArtisticStyle}
          handleArtisticStyleChange={handleArtisticStyleChange}
        />
      ),
      active: false,
      isComplete: false,
    },
    {
      title: "Add a message",
      children: (
        <TextArea
          placeholder="Happy birthday bob."
          handleChange={handleMessageChange}
        />
      ),
      isComplete: hasMessage,
      active: false,
    },
  ];

  const disabled = !hasPrompt || !hasFile;

  return (
    <div className="h-screen border-r border-grey-600 flex flex-col justify-between p-4">
      <Accordion data={data} />
      <Tooltip label="Enter prompt and image to generate image">
        <button
          className={`text-white py-4 px-16 w-60 rounded-md shadow-inner w-full ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          } ${disabled ? "bg-gray-800" : "bg-black"}`}
          onClick={handleGenerateCard}
          disabled={disabled}
        >
          Generate
        </button>
      </Tooltip>
    </div>
  );
};

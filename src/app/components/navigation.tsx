import React from "react";
import {Accordion} from "./accordion";
import {DragDrop} from "./drag-drop";

interface NavigationProps {
  handlePromptChange: (value: string) => void;
  handleMessageChange: (value: string) => void;
  handleImageCreate: () => void;
  handleFile: (file: File) => void;
}

export const Navigation = ({
  handlePromptChange,
  handleImageCreate,
  handleMessageChange,
  handleFile,
}: NavigationProps) => {
  const data = [
    {
      title: "Prompt",
      content: (
        <input
          onChange={(event) => handlePromptChange(event.target.value)}
          className="border-2 border-black"
        />
      ),
    },
    {
      title: "Upload images",
      content: (
        <div>
          <DragDrop onFile={handleFile} />
        </div>
      ),
    },
    {
      title: "Add a custom message",
      content: (
        <input
          onChange={(event) => handleMessageChange(event.target.value)}
          className="border-2 border-black"
        />
      ),
    },
  ];

  return (
    <div className="h-screen border-r-2 border-red-600">
      <Accordion data={data} />
      <button onClick={handleImageCreate}>Generate</button>
    </div>
  );
};

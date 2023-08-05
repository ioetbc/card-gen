import React from "react";
import {Accordion} from "./accordion";

interface NavigationProps {
  handlePromptChange: (value: string) => void;
  handleImageCreate: () => void;
}

export const Navigation = ({
  handlePromptChange,
  handleImageCreate,
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
      content: <p>This is the content for Accordion 2.</p>,
    },
    {
      title: "Something else",
      content: <p>This is the content for Accordion 2.</p>,
    },
  ];

  return (
    <div className="h-screen border-r-2 border-red-600">
      <Accordion data={data} />
      <button onClick={handleImageCreate}>Generate</button>
    </div>
  );
};

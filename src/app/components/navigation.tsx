import React from "react";

import {Accordion} from "./accordion";
import {DragDrop} from "./drag-drop";
import {TextArea} from "./inputs/text-area";
import {ArtisticStyle} from "./artistic-style";
import {NavigatonItems, TArtisticStyle} from "../types";
import {PrimaryButton} from "./buttons/primary-button";
import {BottomSheet} from "react-spring-bottom-sheet";

type NavigationProps = {
  isDesktop: boolean;
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
  showNavigation?: boolean;
  setShowNavigation?: (value: boolean) => void;
};

type NavProps = {
  data: NavigatonItems[];
  disabled: boolean;
  handleGenerateCard: () => void;
  isDesktop: boolean;
};

const Nav = ({data, disabled, handleGenerateCard, isDesktop}: NavProps) => {
  return (
    <div className="h-screen border-r border-grey-600 flex flex-col justify-between p-4">
      <Accordion data={data} />

      {isDesktop && (
        <PrimaryButton
          disabled={disabled}
          label="Generate"
          handleOnClick={handleGenerateCard}
        />
      )}
    </div>
  );
};

export const Navigation = ({
  isDesktop,
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
  showNavigation = false,
  setShowNavigation,
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

  return isDesktop ? (
    <Nav
      data={data}
      disabled={disabled}
      handleGenerateCard={handleGenerateCard}
      isDesktop={isDesktop}
    />
  ) : (
    <BottomSheet
      open={showNavigation}
      onDismiss={() => setShowNavigation && setShowNavigation(false)}
      maxHeight={window.innerHeight - 80}
      footer={
        <PrimaryButton
          disabled={disabled}
          label="Generate"
          handleOnClick={handleGenerateCard}
        />
      }
    >
      <Nav
        data={data}
        disabled={disabled}
        handleGenerateCard={handleGenerateCard}
        isDesktop={isDesktop}
      />
    </BottomSheet>
  );
};

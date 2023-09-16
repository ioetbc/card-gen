import {ChatCompletionMessage} from "openai/resources/chat/index.mjs";
import {ReactNode} from "react";

export type TArtisticStyle =
  | "3d"
  | "art-deco"
  | "art-nouveau"
  | "charcoal"
  | "comic"
  | "cubisim"
  | "john-sargent"
  | "photograph"
  | "stone-sculpture"
  | "van-gogh"
  | "pop-art";

export type NavigatonItems = {
  title: string;
  children: ReactNode;
  active: boolean;
  isComplete: boolean;
};

export type TProduct = {
  url: string;
  title: string;
} | null;

export type TCard = {
  guidanceScale: number;
  id: string;
  images: string[];
  initImage: string;
  negativePrompt: string;
  prompt: string;
  samples: number;
  seed: number;
  steps: number;
  strength: number;
  title: string;
};

export type TUser = {
  name: string;
  avatar: string;
};

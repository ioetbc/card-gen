import {ReactNode} from "react";

export enum EArtisticStyle {
  ThreeD = "3d",
  ArtDeco = "art-deco",
  ArtNouveau = "art-nouveau",
  Charcoal = "charcoal",
  Comic = "comic",
  Cubisim = "cubisim",
  JohnSargent = "john-sargent",
  PopArt = "pop-art",
  StoneSculpture = "stone-sculpture",
  VanGogh = "van-gogh",
  Picasso = "picasso",
  Photograph = "photograph",
  Kandinsky = "kandinsky",
  Munch = "munch",
  Hokusai = "hokusai",
}

export type TArtisticStyle =
  | "3d"
  | "art-deco"
  | "art-nouveau"
  | "claude-monet"
  | "charcoal"
  | "comic"
  | "cubisim"
  | "john-sargent"
  | "photograph"
  | "stone-sculpture"
  | "van-gogh"
  | "pop-art"
  | "picasso"
  | "kandinsky"
  | "munch"
  | "hokusai";

export type ArtisticOptions = {
  label: string;
  value: TArtisticStyle;
};

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
  output: string[];
  image: string;
  initImage: string;
  negativePrompt: string;
  prompt: string;
  samples: number;
  seed: number;
  steps: number;
  strength: number;
  title: string;
  saved: boolean;
};

export type TUser = {
  name: string;
  avatar: string;
};

export type TStableDiffusionMeta = {
  H: number;
  W: number;
  file_prefix: string;
  guidance_scale: number;
  init_image: string;
  n_samples: number;
  negative_prompt: string;
  outdir: string;
  prompt: string;
  safetychecker: string;
  seed: number;
  steps: number;
  strength: number;
};

export type TStableDiffusionBody = {
  status: string;
  webhook_type: string;
  track_id: string;
  id: number;
  meta: TStableDiffusionMeta;
  output: string[];
};

export enum ECardSize {
  PORTRAIT = "portrait",
  LANDSCAPE = "landscape",
  SQUARE = "square",
}

export type TCardSize =
  | ECardSize.LANDSCAPE
  | ECardSize.PORTRAIT
  | ECardSize.SQUARE;

export type FooterItem = {
  label: string;
  url: string;
};

export type TToast = {
  open: boolean;
  description: string;
  fill: "pink" | "red";
};

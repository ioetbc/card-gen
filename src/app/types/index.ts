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
  url: string;
};

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

export enum EFontFamily {
  HELVETICA = "helvetica",
  COMIC_SANS = "comic-sans",
}

export type TEditFrontCard = {
  value: string;
  color: string;
  alignment: "left" | "center" | "right";
  size: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  family: EFontFamily;
};

export type TEditInsideCard = {
  value: {
    header: string;
    body: string;
    footer: string;
  };
  color: string;
  alignment: "left" | "center" | "right";
  size: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  family: EFontFamily;
};

export type TextColorMap = {
  [key: string]: string;
};

type IdealPostcodeAddressResult = {
  postcode: string;
  postcode_inward: string;
  postcode_outward: string;
  post_town: string;
  dependant_locality: string;
  double_dependant_locality: string;
  thoroughfare: string;
  dependant_thoroughfare: string;
  building_number: string;
  building_name: string;
  sub_building_name: string;
  po_box: string;
  department_name: string;
  organisation_name: string;
  udprn: number;
  postcode_type: string;
  su_organisation_indicator: string;
  delivery_point_suffix: string;
  line_1: string;
  line_2: string;
  line_3: string;
  premise: string;
  longitude: number;
  latitude: number;
  eastings: number;
  northings: number;
  country: string;
  traditional_county: string;
  administrative_county: string;
  postal_county: string;
  county: string;
  district: string;
  ward: string;
  uprn: string;
  id: string;
  country_iso: string;
  country_iso_2: string;
  county_code: string;
  language: string;
  umprn: string;
  dataset: string;
};

export type IdealPostcodeAddress = {
  result: IdealPostcodeAddressResult[];
};

export type TAddressMeta = {
  line1: string;
  line2: string;
  city: string;
  country: string;
  postcode: string;
};

export type TAddress = {
  value: string;
  label: string;
  meta: TAddressMeta;
};

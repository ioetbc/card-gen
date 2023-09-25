import {ArtisticOptions, FooterItem, TArtisticStyle} from "./types";

export const STABLE_DIFFUSION_IMAGE_2_IMAGE_URL =
  "https://stablediffusionapi.com/api/v3/img2img";

export const STABLE_DIFFUSION_TEXT_2_IMAGE_URL =
  "https://stablediffusionapi.com/api/v3/text2img";

export const ARTISTIC_STYLES: ArtisticOptions[] = [
  {
    label: "Claude Monet",
    value: "claude-monet",
  },
  {
    label: "Van Gogh",
    value: "van-gogh",
  },
  {
    label: "Picasso",
    value: "picasso",
  },
  {
    label: "Kandinsky",
    value: "kandinsky",
  },
  {
    label: "Munch",
    value: "munch",
  },
  {
    label: "Hokusai",
    value: "hokusai",
  },
];

export const CARD_SIZES = [
  {
    label: "Square",
    value: "square",
  },
  {
    label: "Landscape",
    value: "landscape",
  },
  {
    label: "Portrait",
    value: "portrait",
  },
];

export const MENU_ITEMS = [
  {
    label: "Marketplace",
    url: "marketplace",
  },
  {
    label: "History",
    url: "history",
  },
  {
    label: "About",
    url: "about",
  },
  {
    label: "Contact",
    url: "contact",
  },
  {
    label: "FAQ",
    url: "faq",
  },
];

export const MOCK_CARDS_CREATE_NEW_FIRESTORE_COLLECTION = [
  {
    id: "1",
    title: "Mother and daughter baking",
    prompt:
      "large pint in octoberfest invite card, beer glasses, strudels and birthday presents surrounded by presents, realistic, highly detailed, digital illustration, trending in artstation, classical painting, smooth, sharp focus art by ilya repin",
    url: "https://rubberducker-user-uploads.s3.eu-west-2.amazonaws.com/image+33.jpg",
    user: {
      name: "John Doe",
      avatar:
        "https://lh3.googleusercontent.com/ogw/AGvuzYZXVBdPV9LVahpOOl96cZuFR3ZXfopjjiBquxT80w=s64-c-mo",
    },
  },
  {
    id: "2",
    title: "Mother and daughter baking",
    prompt:
      "octoberfest poster, beer glasses, strudels surrounded by flowers and birthday presents, realistic, highly detailed, digital illustration, trending in artstation, classical painting, smooth, sharp focus art by ilya repin",
    url: "https://rubberducker-user-uploads.s3.eu-west-2.amazonaws.com/image+33.jpg",
    user: {
      name: "John Doe",
      avatar:
        "https://lh3.googleusercontent.com/ogw/AGvuzYZXVBdPV9LVahpOOl96cZuFR3ZXfopjjiBquxT80w=s64-c-mo",
    },
  },
];

export const FILTER_TYPES = [
  {
    label: "All",
    value: "all",
    active: true,
  },
  {
    label: "Birthday",
    value: "birthday",
    active: false,
  },
  {
    label: "Christmas",
    value: "christmas",
    active: false,
  },
  {
    label: "Wedding",
    value: "wedding",
    active: false,
  },
  {
    label: "Baby Shower",
    value: "baby_shower",
    active: false,
  },
  {
    label: "Anniversary",
    value: "anniversary",
    active: false,
  },
];

export const USER = {
  name: "John Doe",
  avatar:
    "https://lh3.googleusercontent.com/ogw/AGvuzYZXVBdPV9LVahpOOl96cZuFR3ZXfopjjiBquxT80w=s64-c-mo",
};

export const NEGATIVE_PROMPT =
  "extra limbs, poorly drawn face, poorly drawn hands, disfigured, deformed, bad anatomy, distorted face, multiple faces, multiple chins";

export const FOOTER_ITEMS: FooterItem[] = [
  {
    label: "Home",
    url: "",
  },
  {
    label: "My bookmarks",
    url: "my-bookmarks",
  },
  {
    label: "My cards",
    url: "my-cards",
  },
  {
    label: "Privacy policy",
    url: "privacy-policy",
  },
  {
    label: "Terms of service",
    url: "terms-of-service",
  },
  {
    label: "Contact us",
    url: "contact-us",
  },
  {
    label: "FAQs",
    url: "faqs",
  },
];

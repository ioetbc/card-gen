export const STABLE_DIFFUSION_IMAGE_2_IMAGE_URL =
  "https://stablediffusionapi.com/api/v3/img2img";

export const STABLE_DIFFUSION_TEXT_2_IMAGE_URL =
  "https://stablediffusionapi.com/api/v3/text2img";

export const ARTISTIC_STYLES = [
  {
    label: "Claude Monet",
    value: "claude_monet",
  },
  {
    label: "Van Gogh",
    value: "van_gogh",
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
    label: "Birthday",
    value: "birthday",
  },
  {
    label: "Christmas",
    value: "christmas",
  },
  {
    label: "Wedding",
    value: "wedding",
  },
  {
    label: "Baby Shower",
    value: "baby_shower",
  },
  {
    label: "Anniversary",
    value: "anniversary",
  },
];

export const USER = {
  name: "John Doe",
  avatar:
    "https://lh3.googleusercontent.com/ogw/AGvuzYZXVBdPV9LVahpOOl96cZuFR3ZXfopjjiBquxT80w=s64-c-mo",
};

export const NEGATIVE_PROMPT =
  "extra limbs, poorly drawn face, poorly drawn hands, disfigured, deformed, bad anatomy, distorted face, multiple faces, multiple chins";

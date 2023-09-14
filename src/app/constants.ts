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
    url: "https://krea-prod-v1-generations.s3.us-east-1.amazonaws.com/images/5fc37a7b-deb2-4150-b195-8a23a3cb935d.webp",
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
    url: "https://krea-prod-v1-generations.s3.us-east-1.amazonaws.com/images/167c812b-38ce-4f8c-ad6c-e9c8bdd6bc63.webp",
    user: {
      name: "John Doe",
      avatar:
        "https://lh3.googleusercontent.com/ogw/AGvuzYZXVBdPV9LVahpOOl96cZuFR3ZXfopjjiBquxT80w=s64-c-mo",
    },
  },
];

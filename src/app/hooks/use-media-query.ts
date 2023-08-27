import {useMediaQuery} from "react-responsive";

const breakPoints = {
  desktop: "768",
};

export const useMedia = () => {
  const isDesktop = useMediaQuery({
    minWidth: +breakPoints.desktop,
  });

  return {
    isDesktop,
  };
};

import {useEffect, useRef, useState} from "react";

export const useToggleOnScroll = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    function handleScroll() {
      let st = window.scrollY || document.documentElement.scrollTop;

      let isAtBottom =
        st + window.innerHeight >= document.documentElement.offsetHeight;

      if (st > lastScrollTop.current || isAtBottom) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollTop.current = st <= 0 ? 0 : st;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
};

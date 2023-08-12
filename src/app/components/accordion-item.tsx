import React, {useState, useEffect, useRef} from "react";
import {Collapse} from "@chakra-ui/transition";

type AccordionItemProps = {
  title: string;
  active: boolean;
  children: React.ReactNode;
  isComplete: boolean;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  active,
  isComplete,
}) => {
  const [isOpen, setIsOpen] = useState(active);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        const inputElem = contentRef.current?.querySelector("textarea");
        if (inputElem) {
          inputElem.focus();
        }
      }, 600); // Delay slightly more than the animation duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between text-left py-8 px-4 bg-white text-black focus:outline-none border-b border-gray-200"
      >
        <div className="flex items-center gap-2">
          <div>{title}</div>
          <div
            className={`${
              isComplete ? "bg-green-400" : "bg-red-400"
            } w-2 h-2 rounded-full`}
          ></div>
        </div>
        <div>{isOpen ? "-" : "+"}</div>
      </button>
      <Collapse startingHeight={0} in={isOpen} className="bg-white">
        <div className="p-4 border-b border-gray-200" ref={contentRef}>
          {children}
        </div>
      </Collapse>
    </div>
  );
};

// Accordion.tsx
import React, {ReactNode} from "react";
import {AccordionItem} from "./accordion-item";

type AccordionProps = {
  data: {title: string; content: ReactNode}[];
};

export const Accordion: React.FC<AccordionProps> = ({data}) => {
  return (
    <div className="w-full p-2 border border-red-300 rounded-lg">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};
